import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todo-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPage {

}
