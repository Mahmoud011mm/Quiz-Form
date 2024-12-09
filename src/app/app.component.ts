import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizFormComponent } from "./quiz-form/quiz-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form';
}
