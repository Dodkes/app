import rateLimit from "express-rate-limit";
import { logger } from "../log4js";

// limit to 10 requests per 15 minutes per IP
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1_000, // 15 min
  max: 10, // max requests per IP
  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    logger.warn(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).send("Too many requests, please try again later");
  },
});
