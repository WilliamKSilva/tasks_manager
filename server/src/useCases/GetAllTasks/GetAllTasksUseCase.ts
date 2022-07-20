import { ITasksRepository } from "../../repositories/ITasksRepository";
import { IGetAllTasksDTO } from "./GetAllTasksDTO";


export class GetAllTasksUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ){}

  async execute(data: IGetAllTasksDTO) {
    const tasks = await this.tasksRepository.findByUserId(data.userId);
    
    return tasks;
  }
}