import mongoose from "mongoose";


export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://vaibhavdike:0000000000@cluster0.izpm89j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
