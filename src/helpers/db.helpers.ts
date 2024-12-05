import fs from "fs";
import { Task } from "../model/task.model";

const DATABASE_PATH = "./database/db.json";

export const readDatabase = async (): Promise<Task[]> => {
  const data = await fs.promises.readFile(DATABASE_PATH, "utf-8");
  return JSON.parse(data);
};

export const writeDatabase = async (data: Task[]) => {
  await fs.promises.writeFile(DATABASE_PATH, JSON.stringify(data));
};
