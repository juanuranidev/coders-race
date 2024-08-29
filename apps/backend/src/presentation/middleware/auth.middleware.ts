import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { envs } from "../../config";
import { JWTAdapter } from "../../config/adapters/jwt.adapter";

const db = new PrismaClient();

export class AuthMiddleware {
  static async validateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(401).json({ error: "No token provided" });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    try {
      const token = authorization.split(" ").at(1);

      const payload: any = await new JWTAdapter(envs.JWT_SEED).validateToken(
        token!
      );
      if (!payload) {
        return res.status(401).json({ error: "Invalid Token" });
      }

      const user = await db.user.findFirst({
        where: {
          id: Number(payload.id),
        },
      });
      if (!user) {
        return res.status(401).json({ error: "User not exist" });
      }

      // req.body.user = UserEntity.fromObject(user);

      next();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
