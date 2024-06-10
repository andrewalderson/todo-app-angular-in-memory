import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: async () =>
      (await import("./features/onboarding/onboarding.page")).OnboardingPage,
  },
  {
    path: "tasks",
    loadComponent: async () =>
      (await import("./features/tasks/tasks.page")).TasksPage,
  },
];
