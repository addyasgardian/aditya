import { Request, Response, NextFunction } from "express";
import modelDetailschema from "../models/userdata";

import axios from "axios";

type UserContact = {
  Seller: string;
  Buyer: string;
};

export const AddDataToTable = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as UserContact;
    const ContractCreated = await modelDetailschema.create({
      Seller: data.Seller,
      Buyer: data.Buyer,
    });
    await axios.post("https://sheetdb.io/api/v1/1vrc2u9afv35x", data);
    const formatedDate = ContractCreated.Date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return res
      .status(200)
      .json({ ContractDeatils: ContractCreated, date: formatedDate });
  } catch (e) {
    return res
      .status(400)
      .json({ ContractDetails: "Error While Creating Contract" });
  }
};
