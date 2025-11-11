import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { main } from "./hello-world/hello-world.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello-world", async (_req, res) => {
  await main();
  res.json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

