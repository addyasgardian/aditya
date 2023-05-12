"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const Routes_1 = __importDefault(require("./Routes/Routes"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const Port = process.env.PORT || 5000;
app.use("/form", Routes_1.default);
app.use((res) => {
    return res.send(`<h1>Welcome To express </h1>`);
});
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(Port, () => {
        console.log("App Running Connected " + Port);
    });
})
    .catch((e) => {
    console.log(e);
});
