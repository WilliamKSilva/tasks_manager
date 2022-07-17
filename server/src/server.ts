import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { app } from "./app";
import { router } from "./routes";

app.listen(3333);

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

console.log('Server is running!');