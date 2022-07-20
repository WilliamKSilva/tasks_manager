import { Request, Response } from "express";
import { GetAllTasksUseCase } from "./GetAllTasksUseCase";


export class GetAllTasksController {
  constructor(
    private getAllTasksUseCase: GetAllTasksUseCase
  ){}

  async handle(request: Request, response: Response) {
    const { userId } = request;

    try {
      await this.getAllTasksUseCase.execute({
        userId,
      })

      return response.status(200).send();
    } catch(error) {
      throw new Error('Erro ao buscar tasks do usuário!')
    }
  }
}