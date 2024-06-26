import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
} from "@angular/core";
import { TaskListItemComponent } from "./components/task-list-item/task-list-item.component";
import { TaskListStore } from "./services/task-list.store";

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

  protected readonly taskListStore = inject(TaskListStore);
}
