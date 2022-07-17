import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";


const tasksRepository = new TasksRepository();

const createTaskUseCase = new CreateTaskUseCase(
  tasksRepository
)

const createTaskController = new CreateTaskController(
  createTaskUseCase
)

export { createTaskUseCase, createTaskController }