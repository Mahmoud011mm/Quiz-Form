import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';


type FormAnswer = FormGroup<{ text: FormControl<string> }>

type FormQuestion = FormGroup<{
  questionName: FormControl<string>,
  answers: FormArray<FormAnswer>
}>

type Form = FormGroup<{
  questions : FormArray<FormQuestion> 
}>

@Component({
  selector: 'app-quiz-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css'
})
export class QuizFormComponent {

  fb = inject(NonNullableFormBuilder);
  quizForm: Form = this.fb.group({
    questions: this.fb.array<FormQuestion>([this.generateQestion()])
  })

  generateQestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([])
    })
  }

  adddQuestion(): void {
    this.quizForm.controls.questions.push(this.generateQestion())
  }

  removeQuestion(questionIndex: number): void {
    this.quizForm.controls.questions.removeAt(questionIndex)
  }

  addAnswer(questionIndex: number): void {
    const newAnswer: FormAnswer = this.fb.group({
      text: ''
    })
    this.quizForm.controls.questions.at(questionIndex)?.controls?.answers?.push(newAnswer)
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.quizForm.controls.questions
      .at(questionIndex)
      ?.controls?.answers?.removeAt(answerIndex);
  }

  onSubmit() {
    console.log(this.quizForm.getRawValue);
  }


}
