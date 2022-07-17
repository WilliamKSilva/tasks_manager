import { Task } from "../entities/Task";

export interface ITasksRepository {
  findByTitle(title: string): Promise<Task>;
  findByUserId(userId: string): Promise<Task[]>;
  save(task: Task): Promise<void>;
}