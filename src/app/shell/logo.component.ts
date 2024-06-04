import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'todo-logo',
  standalone: true,
  imports: [MatIconModule],
  template: `<mat-icon>done_all</mat-icon><span>To Do</span>`,
  styles: [
    `
      :host {
        display: flex;
        gap: 8px;
        align-items: center;
        padding-left: 8px;
      }
    `,
  ],
})
export class LogoComponent { }