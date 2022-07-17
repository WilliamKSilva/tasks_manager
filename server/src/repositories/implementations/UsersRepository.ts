import { prismaClient } from "../../database/prismaClient";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


export class UsersRepository implements IUsersRepository {
  
  async findByEmail(email: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    return user;
  }

  async create(data: User) {
    await prismaClient.user.create({
      data
    })
  }
}