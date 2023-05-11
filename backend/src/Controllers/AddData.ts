import { Request, Response, NextFunction } from "express";

type UserContact = {
  name: string;
  address: string;
};

export const AddDataToTable = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body as UserContact;
    return res.send(
      `Contract signed Thank You ${data.name} address ${data.address} `
    );
  } catch (e) {
    console.log(e);
  }
};
