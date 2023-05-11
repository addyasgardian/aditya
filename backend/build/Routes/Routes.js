"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AddData_1 = require("../Controllers/AddData");
const route = (0, express_1.Router)();
route.post("/postdata", AddData_1.AddDataToTable);
exports.default = route;
