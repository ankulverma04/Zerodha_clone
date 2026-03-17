import mongoose from "mongoose";

const dbConnect = async () => {
  const url = process.env.MONGO_URL;

  try {
    const conn = await mongoose.connect(url);
    console.log("Db is connected");
    return conn; // optional, if you want to use conn elsewhere
  } catch (err) {
    console.error("Some error connecting to DB:", err);
  }
};

export default dbConnect;