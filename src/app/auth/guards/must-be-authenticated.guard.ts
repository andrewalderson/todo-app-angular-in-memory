import { InjectionToken, inject } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

export const MUST_BE_AUTHENTICATED_TO_ACTIVATE = new InjectionToken(
  "mustBeAuthenticatedToActivate",
  {
    providedIn: "root",
    factory: () => () => {
      const authenticationService = inject(AuthenticationService);
      if (!authenticationService.isAuthenticated()) {
        authenticationService.login();
        return false;
      }
      return true;
    },
  }
);
