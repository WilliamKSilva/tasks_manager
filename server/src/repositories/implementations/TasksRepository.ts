import { prismaClient } from "../../database/prismaClient";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {

  async findByTitle(title: string): Promise<Task> {
    const task = await prismaClient.task.findFirst({
      where: {
        title
      }
    });

    return task;
  }

  async findByUserId(userId: string): Promise<Task[]> {
    const tasks = await prismaClient.task.findMany({
      where: {
        userId
      }
    })

    return tasks;
  }


  async save(task: Task): Promise<void> {
    await prismaClient.task.create({
      data: task
    })
  }
}