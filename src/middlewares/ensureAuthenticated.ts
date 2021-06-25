import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: "Token is invalid!" });
  }

  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(
      token,
      "9976aaa47a3e9f324caa12427da3910d"
    ) as IPayload;
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token is invalid!" });
  }
}
