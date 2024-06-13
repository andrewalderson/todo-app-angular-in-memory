import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
import { AuthenticationService } from "./auth/services/authentication.service";
import { LogoComponent } from "./core/layout/logo/logo.component";
import { AccountMenuComponent } from "./features/account/account-menu/account-menu.component";

@Component({
  selector: "todo-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    LogoComponent,
    AccountMenuComponent,
    MatButton,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  protected readonly authenticationService = inject(AuthenticationService);
}
