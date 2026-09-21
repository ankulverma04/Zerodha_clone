import mongoose from "mongoose";

const LOCAL_URL = "mongodb://127.0.0.1:27017/zerodha";

const dbConnect = async () => {
  const url = process.env.MONGO_URL;

  if (!url) {
    console.error("MONGO_URL missing in .env");
    process.exit(1);
  }

  const options = {
    dbName: "zerodha",
    serverSelectionTimeoutMS: 8000,
    family: 4,
  };

  try {
    await mongoose.connect(url, options);
    console.log("Db is connected:", mongoose.connection.host);
  } catch (err) {
    console.error("Main DB failed:", err.message);

    try {
      await mongoose.connect(LOCAL_URL, options);
      console.log("Db is connected to local MongoDB");
    } catch (localErr) {
      console.error("Local DB also failed:", localErr.message);
      process.exit(1);
    }
  }
};

export default dbConnect;
