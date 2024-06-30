import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { PageTitleComponent } from "../../shared/components/page-title/page-title.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: "todo-tasks",
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatToolbar,
    PageTitleComponent,
    TaskListComponent,
  ],
  templateUrl: "./tasks.page.html",
  styleUrl: "./tasks.page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPage {}
