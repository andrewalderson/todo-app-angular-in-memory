import { provideHttpClient } from "@angular/common/http";
import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
  inject,
  provideZoneChangeDetection,
} from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { TodoInMemoryDbService } from "./api/todo-in-memory-db.service";
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
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(TodoInMemoryDbService))
  ],
};
