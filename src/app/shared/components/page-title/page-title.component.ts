import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from "@angular/core";

export type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6";

@Component({
  selector: "todo-page-title",
  standalone: true,
  imports: [],
  template: `{{ title() }}`,
  styles: [
    `
      :host {
        display: block;
        color: var(--todo-page-title-color);
        font-family: var(--todo-page-title-font-family);
        font-size: var(--todo-page-title-font-size);
        font-weight: var(--todo-page-title-font-weight);
        letter-spacing: var(--todo-page-title-letter-spacing);
        line-height: var(--todo-page-title-line-height);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  @HostBinding("role") role = "heading";

  @HostBinding("attr.aria-level") get ariaLevel() {
    return this.level();
  }

  title = input.required<string>();

  level = input<HeadingLevel>("2"); // 2 is the default if the 'aria-level' attribute is missing
}
