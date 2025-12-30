import { logger } from "../log4js";

export default function logRequests(req: any, res: any, next: any) {
  logger.info(`[${req.ip}]${req.method} ${req.url}`);
  next();
}
