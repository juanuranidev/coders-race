import { Request, Response, NextFunction } from "express";
import { ServiceContainer } from "../container/service.container";

export class AuthMiddleware {
  static async verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "No token provided or invalid format" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const user = await ServiceContainer.user.readByAuthId.run(token);

      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      req.body.user = user;

      next();
    } catch (error) {
      console.error("Error in auth middleware:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
