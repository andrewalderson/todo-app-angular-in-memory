import { Injectable, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { UserClient } from "../../../api/user/user.client";

@Injectable({ providedIn: "root" })
export class AccountService {
  #userClient = inject(UserClient);

  #user = toSignal(
    this.#userClient.getUser().pipe(
      map((user) => {
        return {
          displayName: user.displayName,
          username: user.userPrincipalName,
        };
      })
    ),
    { initialValue: { displayName: "", username: "" } }
  );

  displayName = computed(() => this.#user().displayName);
  username = computed(() => this.#user().username);
}
