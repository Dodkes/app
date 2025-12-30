import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user-router";
import { limiter } from "./middlewares/rate-limiter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(limiter);

app.use("/users", userRouter());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
