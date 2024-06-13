import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  input,
} from "@angular/core";

@Directive({
  selector: "[todoUserPersonaAvatar]",
  standalone: true,
})
export class UserPersonaAvatarDirective {}

@Component({
  selector: "todo-user-persona",
  standalone: true,
  imports: [],
  templateUrl: "./user-persona.component.html",
  styleUrl: "./user-persona.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonaComponent {
  primaryText = input.required<string>();

  secondaryText = input<string>();
}
