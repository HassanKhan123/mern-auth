import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
