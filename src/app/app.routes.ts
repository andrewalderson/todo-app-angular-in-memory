import { Routes } from "@angular/router";
import { MUST_BE_AUTHENTICATED_TO_ACTIVATE } from "./auth/guards/must-be-authenticated.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: async () =>
      (await import("./features/onboarding/onboarding.page")).OnboardingPage,
  },
  {
    path: "tasks",
    canActivate: [MUST_BE_AUTHENTICATED_TO_ACTIVATE],
    loadChildren: async () =>
      (await import("./features/tasks/tasks.routes")).routes,
  },
];
