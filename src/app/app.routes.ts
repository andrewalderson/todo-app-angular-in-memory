import { Routes } from "@angular/router";

  {
    path: "tasks",
    loadComponent: async () =>
      (await import("./features/tasks/tasks.page")).TasksPage,
  },
