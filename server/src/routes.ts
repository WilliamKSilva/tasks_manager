import { Router } from "express";
import { createTaskController } from "./useCases/CreateTask";

const router = Router();

router.post('/tasks', (request, response) => {
  return createTaskController.handle(request, response);
})