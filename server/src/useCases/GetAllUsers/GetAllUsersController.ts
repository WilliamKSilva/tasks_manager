import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";


export class GetAllUsersController {
  constructor(
    private getAllUsersUseCase: GetAllUsersUseCase
  ){}

  async handle(request: Request, response: Response) {
    const users = await this.getAllUsersUseCase.execute();

    return response.json({users})
  }
}