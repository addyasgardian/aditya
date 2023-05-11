import express from "express";
import { Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import FormRoutes from "./Routes/Routes";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const Port = process.env.PORT || 5000;
app.use("/form", FormRoutes);

app.use((res: Response) => {
  return res.send(`<h1>Welcome To express </h1>`);
});

app.listen(Port, () => {
  console.log("server is running " + Port);
});
