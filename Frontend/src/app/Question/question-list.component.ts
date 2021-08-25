import { Component , OnInit} from '@angular/core';
import { QuestionService } from './question-service';
import { Question } from './question';
@Component({
   selector: 'question-list',  
   templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit
{
    customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['←', '→'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    questions:Question[];
    public constructor(private questionService:QuestionService){}
    public getQuestions():void
    {
       this.questionService.getQuestions().subscribe(data => this.questions=data);
    }
    ngOnInit(){}
}