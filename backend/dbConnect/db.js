import mongoose from "mongoose";

const LOCAL_URL = "mongodb://127.0.0.1:27017/zerodha";

const isRender = Boolean(process.env.RENDER);

const dbConnect = async () => {
  const url = process.env.MONGO_URL;
  const options = {
    dbName: "zerodha",
    serverSelectionTimeoutMS: 15000,
    family: 4,
  };

  if (isRender) {
    if (!url || url.includes("127.0.0.1") || url.includes("localhost")) {
      console.error(
        "On Render set MONGO_URL to Atlas (mongodb+srv://...). Localhost Mongo does not work on Render."
      );
      process.exit(1);
    }

    try {
      await mongoose.connect(url, options);
      console.log("Db is connected:", mongoose.connection.host);
    } catch (err) {
      console.error("Atlas DB failed:", err.message);
      console.error(
        "Fix: Atlas cluster URL galat/delete hai. Naya cluster banao, Network Access me 0.0.0.0/0 add karo, Render env me MONGO_URL update karo."
      );
      process.exit(1);
    }
    return;
  }

  const localUrl = url && !url.includes("mongodb.net") ? url : LOCAL_URL;

  try {
    if (url && url.includes("mongodb.net")) {
      await mongoose.connect(url, options);
    } else {
      await mongoose.connect(localUrl, options);
    }
    console.log("Db is connected:", mongoose.connection.host);
  } catch (err) {
    try {
      await mongoose.connect(LOCAL_URL, options);
      console.log("Db is connected to local MongoDB");
    } catch (localErr) {
      console.error("DB failed:", err.message);
      console.error("Local DB failed:", localErr.message);
      process.exit(1);
    }
  }
};

export default dbConnect;
