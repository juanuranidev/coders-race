import jwt from "jsonwebtoken";

export class JWTAdapter {
  constructor(private readonly seed: string) {}

  generateToken = async (payload: any, duration = "2h") => {
    return new Promise((resolve) => {
      jwt.sign(payload, this.seed, { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);

        resolve(token);
      });
    });
  };

  validateToken = (token: string) => {
    return new Promise((resolve) => {
      jwt.verify(token, this.seed, (err, decoded) => {
        if (err) return resolve(null);

        resolve(decoded);
      });
    });
  };
}
