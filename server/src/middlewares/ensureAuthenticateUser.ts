import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}


export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "01d7eba1e84aa1b064db6030a4d2de9e") as IPayload;

    request.userId = sub;

    return next();
  } catch(error) {
    return response.status(401).json({
      message: "Invalid token"
    })
  }
}