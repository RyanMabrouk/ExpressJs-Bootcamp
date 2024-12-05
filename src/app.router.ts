import { Express } from "express";
import tasksRouter from "./routes/tasks.router";
function AppRouter(app: Express) {
  app.use("/tasks", tasksRouter);
}

export default AppRouter;
