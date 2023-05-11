"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDataToTable = void 0;
const AddDataToTable = (req, res, next) => {
    try {
        const data = req.body;
        return res.send(`Contract signed Thank You ${data.name} address ${data.address} `);
    }
    catch (e) {
        console.log(e);
    }
};
exports.AddDataToTable = AddDataToTable;
