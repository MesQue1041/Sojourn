import "dotenv/config"; 
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Consider configuring CORS for specific origins if necessary

app.use("/api/users", userRoutes);
console.log(process.env.JWT_SECRET_KEY);

app.listen(7000, () => {
  console.log("Server is running on localhost:7000");
});
