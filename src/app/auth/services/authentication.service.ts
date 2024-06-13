import { Injectable, effect, inject, signal } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  #isAuthenticated = signal<boolean>(false);
  readonly isAuthenticated = this.#isAuthenticated.asReadonly();

  // in a real app we would be redirecting outside the app to login and logout
  // and then redirecting back to the appropriate page in the app.
  // this effect just simulates that
  #router = inject(Router);
  #redirect = effect(() =>
    this.#isAuthenticated()
      ? this.#router.navigateByUrl("/tasks")
      : this.#router.navigateByUrl("")
  );

  login() {
    this.#isAuthenticated.set(true);
  }

  logout() {
    this.#isAuthenticated.set(false);
  }
}
