import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import { json } from "body-parser";
import { config } from "dotenv";
import { UserEntry } from "./types/UserEntry.type";
import { API_ROUTES } from "./utils/routes";
import { mockedUsers } from "./mocks/mockedUsers";
import { validateApiKey } from "./utils/helpers";
import { createSecureServer } from "./utils/secureServer";

config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(validateApiKey);
app.use(json());

const consentsArray: UserEntry[] = mockedUsers;

app.post(API_ROUTES.createConsent, (req, res) => {
  const { name, email, consents }: UserEntry = req.body;
  consentsArray.unshift({ name, email, consents });
  res.status(201).json({ success: true });
});

app.get(API_ROUTES.getConsents, (req, res) => {
  res.status(200).json(consentsArray);
});

const server = createSecureServer(app);

server.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
