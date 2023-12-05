import https from "https";
import fs from "fs";
import { Express } from "express";

const privateKey = fs.readFileSync("server.key", "utf8");
const certificate = fs.readFileSync("server.cert", "utf8");

const credentials = { key: privateKey, cert: certificate };

export const createSecureServer = (app: Express) => {
  return https.createServer(credentials, app);
};
