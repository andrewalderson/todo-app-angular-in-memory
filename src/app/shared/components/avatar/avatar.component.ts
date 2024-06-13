/* eslint-disable @angular-eslint/no-inputs-metadata-property */
import { coerceElement } from "@angular/cdk/coercion";
import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  InjectionToken,
  computed,
  signal,
} from "@angular/core";

export interface Avatar {
  _elementRef: ElementRef<HTMLElement>;
  _setUseImage: (value: boolean) => void;
}

export const AVATAR = new InjectionToken<Avatar>("avatar");

@Directive({
  selector: "[todoAvatarFallback]",
  standalone: true,
})
export class AvatarFallbackDirective {}

@Component({
  selector: "todo-avatar",
  standalone: true,
  imports: [],
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: AVATAR, useExisting: AvatarComponent }],
})
export class AvatarComponent {
  protected readonly useImage = computed(() => this.#useImage() === true);

  #useImage = signal(false);

  constructor(
    public _elementRef: ElementRef<HTMLElement>,
    @Attribute("aria-hidden") ariaHidden: string
  ) {
    if (!ariaHidden) {
      coerceElement(this._elementRef).setAttribute("aria-hidden", "true");
    }
  }

  _setUseImage(value: boolean) {
    this.#useImage.set(value);
  }
}
