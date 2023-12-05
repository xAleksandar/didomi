import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";

config();

const API_KEY = process.env.API_KEY;

// eslint-disable-next-line
export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized - Invalid API Key" });
  }

  next();
};
