import "dotenv/config";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import { ErrorException } from "./exceptions/ErrorException";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  (
    err: Error | ErrorException,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    if (err instanceof ErrorException) {
      return response.status(err.status).json({
        error: err.msg,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3000, () => {
  console.log("Server is running");
});
