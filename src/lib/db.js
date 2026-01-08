import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb database connect successfully!"))
    .catch((error) => console.log(error));
};

export default connectToDB;
