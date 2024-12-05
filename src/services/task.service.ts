import {
  createTaskFromDb,
  deleteTaskFromDb,
  getTaskByIdFromDb,
  getTasksFromDb,
  Task,
  updateTaskFromDb,
} from "../model/task.model";
import { ICreateTask } from "../schema/task.schema";

export async function getTasks({
  page,
  limit,
  sort,
  sort_by,
}: {
  page: number;
  limit: number;
  sort?: "asc" | "desc";
  sort_by?: keyof Omit<Task, "message" | "completed">;
}) {
  const data = await getTasksFromDb({ page, limit, sort, sort_by });
  return data;
}

export async function getTaskById(id: number) {
  return await getTaskByIdFromDb(id);
}

export async function createTask(task: {
  message: string;
  completed: boolean;
}) {
  return await createTaskFromDb(task);
}

export async function updateTask(id: number, task: Task) {
  return await updateTaskFromDb(id, task);
}

export function deleteTask(id: number) {
  return deleteTaskFromDb(id);
}
