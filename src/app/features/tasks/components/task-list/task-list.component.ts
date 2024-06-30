import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from "@angular/core";
import { Task } from "../../services/tasks.store";
import { TaskListItemComponent } from "./task-list-item.component";

@Component({
  selector: "todo-task-list",
  standalone: true,
  imports: [TaskListItemComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @HostBinding("role") role = "list";

  tasks = input.required<Task[]>();
}
