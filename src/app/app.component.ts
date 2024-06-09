import { Component } from "@angular/core";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
import { LogoComponent } from "./core/layout/logo/logo.component";

@Component({
  selector: "todo-root",
  standalone: true,
  imports: [RouterOutlet, MatToolbar, LogoComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {}
