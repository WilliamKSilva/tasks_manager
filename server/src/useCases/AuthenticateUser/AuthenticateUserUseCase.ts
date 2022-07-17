import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ){}
  
  async execute({ email, password }: IAuthenticateUser) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new Error('Username or password invalid');
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid');
    }

    const token = sign({email}, "01d7eba1e84aa1b064db6030a4d2de9e", {
      subject: userAlreadyExists.id,
      expiresIn: "1d"
    })
    
    return token;
  }
}