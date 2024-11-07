import express from "express";
import characterRouter from "./character-router";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", characterRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
