import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { catchError, map, of } from "rxjs";

export type User = {
  displayName: string;
  userPrincipalName: string;
};

@Injectable({ providedIn: "root" })
export class UserClient {
  #httpClient = inject(HttpClient);

  getUser() {
    return this.#httpClient.get<User>("/me");
  }

  getPhoto(size?: string) {
    let url = "/me/photo";
    if (size) {
      url += `/${size}`;
    }
    return this.#httpClient
      .get<Blob>(url, {
        headers: { "Content-Type": "image/jpg" },
      })
      .pipe(
        map((blob: Blob) => URL.createObjectURL(blob)),
        catchError(() => of(null))
      );
  }
}
