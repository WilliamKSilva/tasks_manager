import { uuid } from "uuidv4";

export class Task {
  public readonly id: string;

  name: string;
  email: string;
  password: string;
  tasks: Task[];

  constructor(props: Omit<Task, 'id'>, id?: string) {
    Object.assign(this, props);
  }
}