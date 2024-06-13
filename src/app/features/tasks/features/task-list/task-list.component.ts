import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todo-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {

}
