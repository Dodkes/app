import log4js from "log4js";

log4js.configure({
  appenders: {
    file: {
      type: "file",
      filename: "app.log",
      layout: {
        type: "pattern",
        pattern: "[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c - %m",
      },
    },
    console: {
      type: "console",
      layout: {
        type: "pattern",
        pattern: "[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c - %m",
      },
    },
  },
  categories: {
    default: {
      appenders: ["file", "console"],
      level: "debug",
    },
  },
});

export const logger = log4js.getLogger();
