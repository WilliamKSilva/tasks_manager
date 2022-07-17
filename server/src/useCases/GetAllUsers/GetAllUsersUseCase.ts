import { UsersRepository } from "../../repositories/implementations/UsersRepository";


export class GetAllUsersUseCase {
  constructor(
    private usersRepository: UsersRepository
  ){}

  async execute() {
    const users = await this.usersRepository.listAll();

    return users;
  }
}