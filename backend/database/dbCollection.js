import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
    })
    .then(() => {
        console.log("🎉🎉 Connected to database successfully");
    })
    .catch((err) => {
        console.log(`❌❌ Database connection faild!! ${err}`);
    })
}

export {dbConnection};