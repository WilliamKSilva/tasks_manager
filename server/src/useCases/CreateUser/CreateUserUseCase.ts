import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";
import { hash } from 'bcrypt';


export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository 
  ){}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const passwordHash = await hash(data.password, 8);

    const user = new User({
      email: data.email,
      name: data.name,
      password: passwordHash
    });

    this.usersRepository.create(user);
  }
}