import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { IllustratedMessageComponent } from "../../shared/components/illustrated-message/illustrated-message.component";

@Component({
  selector: "todo-onboarding",
  standalone: true,
  imports: [IllustratedMessageComponent, MatButtonModule, RouterLink],
  templateUrl: "./onboarding.page.html",
  styleUrl: "./onboarding.page.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPage {}
