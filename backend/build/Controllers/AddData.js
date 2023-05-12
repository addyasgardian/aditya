"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDataToTable = void 0;
const userdata_1 = __importDefault(require("../models/userdata"));
const axios_1 = __importDefault(require("axios"));
const AddDataToTable = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const ContractCreated = yield userdata_1.default.create({
            Seller: data.Seller,
            Buyer: data.Buyer,
        });
        yield axios_1.default.post("https://sheetdb.io/api/v1/1vrc2u9afv35x", data);
        const formatedDate = ContractCreated.Date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        return res
            .status(200)
            .json({ ContractDeatils: ContractCreated, date: formatedDate });
    }
    catch (e) {
        return res
            .status(400)
            .json({ ContractDetails: "Error While Creating Contract" });
    }
});
exports.AddDataToTable = AddDataToTable;
