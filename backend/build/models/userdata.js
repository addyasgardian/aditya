"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const DetailsSchema = new schema({
    Seller: {
        required: true,
        type: String,
    },
    Buyer: {
        required: true,
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now(),
    },
});
const modelDetailschema = mongoose_1.default.model("SellerBuyer", DetailsSchema);
exports.default = modelDetailschema;
