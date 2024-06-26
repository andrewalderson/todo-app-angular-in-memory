import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { TaskListComponent } from "./features/task-list/task-list.component";

@Component({
  selector: "todo-tasks",
  standalone: true,
  imports: [
    MatSidenavContainer,
    TaskListComponent,
  ],
  templateUrl: "./tasks.page.html",
  styleUrl: "./tasks.page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPage {}
