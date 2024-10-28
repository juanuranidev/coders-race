import { Request, Response } from "express";
import { getErrorInfo } from "@shared/domain/errors/error-catalog";

export class ErrorHandlerMiddleware {
  static async run(_req: Request, res: Response, err: Error) {
    const { statusCode, message } = getErrorInfo(err);

    return res.status(statusCode).json({ error: message });
  }
}
