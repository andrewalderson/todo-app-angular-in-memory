import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
  provideZoneChangeDetection,
} from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory: () => () =>
        inject(MatIconRegistry).setDefaultFontSetClass(
          "material-icons-outlined"
        ),
      multi: true,
    },
  ],
};
