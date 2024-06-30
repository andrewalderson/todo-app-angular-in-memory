import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from "@angular/core";
import { Task } from "../../../../api/tasks/tasks.client";

@Component({
  selector: "todo-task-list-item",
  standalone: true,
  imports: [],
  templateUrl: "./task-list-item.component.html",
  styleUrl: "./task-list-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListItemComponent {
  @HostBinding("role") role = "listitem";

  task = input.required<Task>();
}
