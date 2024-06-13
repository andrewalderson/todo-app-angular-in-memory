import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatSidenavContainer } from "@angular/material/sidenav";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "todo-tasks",
  standalone: true,
  imports: [MatSidenavContainer, RouterOutlet],
  templateUrl: "./tasks.page.html",
  styleUrl: "./tasks.page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPage {}
