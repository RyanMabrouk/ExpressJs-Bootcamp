import { Task } from "../model/task.model";

export function paginateData(data: Task[], page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = page * limit;
  return data.slice(start, end);
}

export function sortData(
  data: Task[],
  order: "asc" | "desc",
  sort_by: keyof Omit<Task, "message" | "completed">
) {
  return data.sort((a, b) => {
    if (order === "asc") {
      return a[sort_by] - b[sort_by];
    } else {
      return b[sort_by] - a[sort_by];
    }
  });
}
