import { Router } from "express";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createTaskController } from "./useCases/CreateTask";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post('/tasks', (request, response) => {
  return createTaskController.handle(request, response);
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.post('/authenticate', (request, response ) => {
  return authenticateUserController.handle(request, response)
})

export { router };