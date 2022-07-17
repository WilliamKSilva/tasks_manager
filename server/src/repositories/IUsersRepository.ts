import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  listAll(): Promise<User[]>;
  create(user: User): Promise<void>;
}