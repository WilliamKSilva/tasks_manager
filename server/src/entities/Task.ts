import { uuid } from "uuidv4";

export class Task {
  public readonly id: string;

  public userId: string;
  public title: string;
  public description: string;
  public isActive: boolean;

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props);
  }
}