import { UsersRepository } from "../../repositories/implementations/UsersRepository";


export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ){}
  
  async execute({ email, password }: IAuthenticateUser) {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new Error('Username or password invalid')
    }

    
  }
}