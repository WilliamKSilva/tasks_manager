import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const usersRepository = new UsersRepository();

const createTaskUseCase = new CreateUserUseCase(
  usersRepository
)

const createUserController = new CreateUserController(
  createTaskUseCase
)

export { createTaskUseCase, createUserController }