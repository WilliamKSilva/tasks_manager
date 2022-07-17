import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  constructor(
    private createTaskUseCase: CreateTaskUseCase,
  ){}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, isActive, userId } = request.body;

    try {
      await this.createTaskUseCase.execute({
        title,
        description,
        isActive,
        userId
      })

      return response.status(201).send();
    } catch(error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}