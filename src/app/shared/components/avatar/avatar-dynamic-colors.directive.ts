import {
  Directive,
  InjectionToken,
  OnChanges,
  OnDestroy,
  inject,
  input,
  isDevMode,
} from "@angular/core";
import { AVATAR } from "./avatar.component";

// these colors are the 700 values from the material color spec
// the default contrast for all is white
const COLOR_TABLE = [
  "#D32F2F",
  "#C2185B",
  "#7B1FA2",
  "#512DA8",
  "#303F9F",
  "#1976D2",
  "#0288D1",
  "#0097A7",
  "#00796B",
  "#388E3C",
  "#689F38",
  "#AFB42B",
  "#FBC02D",
  "#FFA000",
  "#F57C00",
  "#E64A19",
  "#5D4037",
  "#616161",
  "#455A64",
];

export type AvatarColors = {
  foreground: string;
  background: string;
  border?: string; // uses foreground if not set
};

export type AvatarDynamicColorFn = (name?: string) => AvatarColors;

function AVATAR_DYNAMIC_COLORS_FUNCTION_FACTORY(): AvatarDynamicColorFn {
  return (name?: string) => {
    if (!name) {
      return { background: "transparent", foreground: "#ffffff" };
    }
    let hashCode = 0;
    for (let i = name.length - 1; i >= 0; i--) {
      const ch = name.charCodeAt(i);
      const shift = i % 8;
      hashCode ^= (ch << shift) + (ch >> (8 - shift));
    }
    return {
      background: COLOR_TABLE[hashCode % COLOR_TABLE.length],
      foreground: "#ffffff",
    };
  };
}

export const AVATAR_DYNAMIC_COLORS_FUNCTION =
  new InjectionToken<AvatarDynamicColorFn>("todoAvatarDynamicColorsFunction", {
    providedIn: "root",
    factory: AVATAR_DYNAMIC_COLORS_FUNCTION_FACTORY,
  });

@Directive({
  selector: "[todoAvatarDynamicColors]",
  standalone: true,
})
export class AvatarDynamicColorsDirective implements OnChanges, OnDestroy {
  // the css properties need to be set on the avatar
  #avatarElement = inject(AVATAR)._elementRef.nativeElement;

  #colorsFn = inject(AVATAR_DYNAMIC_COLORS_FUNCTION);

  /**
   * Name (usually persons email address) used to render the colors
   */
  colorsName = input.required<string>();

  ngOnChanges(): void {
    this.clearColors();
    if (this.colorsName()) {
      this.setColors(this.colorsName()!);
    }
  }

  ngOnDestroy(): void {
    this.clearColors();
  }

  setColors(name: string) {
    const colors = this.#getAvatarColors(name);
    const style = this.#avatarElement.style;
    style.setProperty("--todo-avatar-color", colors.foreground);
    style.setProperty("--todo-avatar-background-color", colors.background);
    style.setProperty(
      "--todo-avatar-border-color",
      colors.border ?? colors.foreground
    );
  }

  clearColors() {
    const style = this.#avatarElement.style;
    style.removeProperty("--todo-avatar-color");
    style.removeProperty("--todo-avatar-background-color");
    style.removeProperty("--todo-avatar-border-color");
  }

  #getAvatarColors(name?: string) {
    if (isDevMode() && !this.#colorsFn) {
      throw new Error("A colors function must be provided");
    }
    return this.#colorsFn(name);
  }
}
