import { Request, Response, NextFunction } from "express";
import { getErrorInfo } from "@shared/domain/errors/error-catalog";

export class ErrorHandlerMiddleware {
  static async run(err: Error, req: Request, res: Response, next: NextFunction) {
    const { statusCode, message } = getErrorInfo(err);

    return res.status(statusCode).json({ error: message });
  }
}
