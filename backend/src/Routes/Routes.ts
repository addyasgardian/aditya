import { Router } from "express";
import { AddDataToTable } from "../Controllers/AddData";

const route = Router();

route.post("/postdata", AddDataToTable);

export default route;
