import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "todo-illustrated-message",
  standalone: true,
  imports: [],
  templateUrl: "./illustrated-message.component.html",
  styleUrl: "./illustrated-message.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustratedMessageComponent {
  title = input.required<string>();

  description = input<string>();
}
