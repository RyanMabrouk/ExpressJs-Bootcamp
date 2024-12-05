import { readDatabase, writeDatabase } from "../helpers/db.helpers";
import { paginateData, sortData } from "../helpers/query.helpers";
import { ICreateTask } from "../schema/task.schema";

export type Task = {
  id: number;
  message: string;
  completed: boolean;
};

export async function getTasksFromDb({
  page = 1,
  limit = 10,
  sort,
  sort_by,
}: {
  page: number;
  limit: number;
  sort?: "asc" | "desc";
  sort_by?: keyof Omit<Task, "message" | "completed">;
}) {
  let data = await readDatabase();
  if (sort_by && sort) {
    data = sortData(data, sort, sort_by);
  }
  return paginateData(data, page, limit);
}

export async function getTaskByIdFromDb(id: number) {
  const data = await readDatabase();
  return data.find((task) => task.id === id);
}

export async function createTaskFromDb(new_task: {
  message: string;
  completed: boolean;
}) {
  const tasks = await readDatabase();
  const task = { ...new_task, id: new Date().getTime() };
  await writeDatabase([...tasks, task]);
}

export async function updateTaskFromDb(
  id: number,
  updated_task: {
    message?: string;
    price?: number;
  }
) {
  const tasks = await readDatabase();
  const new_tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, ...updated_task };
    }
    return task;
  });
  await writeDatabase(new_tasks);
}

export async function deleteTaskFromDb(id: number) {
  const tasks = await readDatabase();
  const new_tasks = tasks.filter((task) => task.id !== id);
  await writeDatabase(new_tasks);
}
