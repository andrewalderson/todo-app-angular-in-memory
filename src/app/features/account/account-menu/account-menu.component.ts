import { NgTemplateOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { AuthenticationService } from "../../../auth/services/authentication.service";
import { AvatarDynamicColorsDirective } from "../../../shared/components/avatar/avatar-dynamic-colors.directive";
import { AvatarInitialsFallbackComponent } from "../../../shared/components/avatar/avatar-initials-fallback.component";
import { AvatarComponent } from "../../../shared/components/avatar/avatar.component";
import {
  UserPersonaAvatarDirective,
  UserPersonaComponent,
} from "../../../shared/components/user-persona/user-persona.component";
import { AccountService } from "../services/account.service";

@Component({
  selector: "todo-account-menu",
  standalone: true,
  imports: [
    AvatarComponent,
    AvatarInitialsFallbackComponent,
    AvatarDynamicColorsDirective,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon,
    UserPersonaAvatarDirective,
    UserPersonaComponent,
    MatDivider,
    NgTemplateOutlet,
  ],
  templateUrl: "./account-menu.component.html",
  styleUrl: "./account-menu.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountMenuComponent {
  protected readonly accountService = inject(AccountService);
  protected readonly authenticationService = inject(AuthenticationService);
}
