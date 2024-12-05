import { Router } from "express";
import {
  handleCreateTask,
  handleDeleteTask,
  handleGetTaskById,
  handleGetTasks,
  handleUpdateTask,
} from "../controllers/tasks.controller";
import validate from "../helpers/validate";
import {
  GetTasksSchema,
  TaskCreateSchema,
  TaskUpdateSchema,
} from "../schema/task.schema";

const router = Router();

router
  .get("/", [validate(GetTasksSchema)], handleGetTasks)
  .get("/:id", handleGetTaskById)
  .post("/", [validate(TaskCreateSchema)], handleCreateTask)
  .put("/:id", [validate(TaskUpdateSchema)], handleUpdateTask)
  .delete("/:id", handleDeleteTask);

export default router;
