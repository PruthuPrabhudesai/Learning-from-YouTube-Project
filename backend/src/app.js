import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve everything under frontend/src/Home Page as static files
app.use(
  express.static(path.join(__dirname, "../../frontend/src/Home Page"))
);

// if the user hits the root url, send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/src/Home Page/index.html"));
});

export default app; 