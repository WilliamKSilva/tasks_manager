import { Router } from "express";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createTaskController } from "./useCases/CreateTask";
import { createUserController } from "./useCases/CreateUser";
import { getAllUsersController } from "./useCases/GetAllUsers";

const router = Router();

router.post('/tasks', (request, response) => {
  return createTaskController.handle(request, response);
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

router.get('/users', (request, response) => {
  return getAllUsersController.handle(request, response)
})

router.post('/authenticate', (request, response ) => {
  return authenticateUserController.handle(request, response)
})

export { router };