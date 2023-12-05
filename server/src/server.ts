import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { config } from "dotenv";
import { UserEntry } from "./types/UserEntry.type";
import { API_ROUTES } from "./utils/routes";
import { mockedUsers } from "./mocks/mockedUsers";

config();

const app = express();
const port = 4000;

app.use(cors());
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
