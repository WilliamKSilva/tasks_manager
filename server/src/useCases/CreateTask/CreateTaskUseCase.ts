import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUseCase {
  constructor(
    private tasksRepository: ITasksRepository
  ){}

  async execute(data: ICreateTaskRequestDTO) {
    const taskAlreadyExists = await this.tasksRepository.findByTitle(data.title);

    if (taskAlreadyExists) {
      throw new Error('Task already exists!')
    }

    const task = new Task(data);

    await this.tasksRepository.save(task);
  }
}