import { Request, Response, NextFunction } from "express";
import { getErrorInfo } from "@shared/domain/errors/error-catalog";

export class ErrorHandlerMiddleware {
  static async run(
    err: Error,
    res: Response,
  ) {
    const { statusCode, message } = getErrorInfo(err);

    return res.status(statusCode).json({ error: message });
  }
}
