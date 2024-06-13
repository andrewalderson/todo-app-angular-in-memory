import { Routes } from "@angular/router";
import { TaskListComponent } from "./features/task-list/task-list.component";
import { TasksPage } from "./tasks.page";

export const routes: Routes = [
  {
    path: "",
    component: TasksPage,
    children: [{ path: "", component: TaskListComponent }],
  },
];
