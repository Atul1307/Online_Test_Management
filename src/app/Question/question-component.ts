import { Component , OnInit } from '@angular/core';
import { QuestionService } from './question-service';
import { Question } from './question';
import {Router} from '@angular/router';
@Component({
    selector: 'delete-question',
    templateUrl: './question-component.html'
})
export class QuestionComponent implements OnInit
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
   question:Question=new Question(0,'','','','',0,0.0);
   q
   public constructor(private questionService:QuestionService, private router :Router){}
   public getQuestion():void
   {
        //this.book = this.bookService.getBook(1);
        if(this.question.questionId >= 0 && this.question.questionId<=16)
       {
       this.questionService.getQuestion(this.question.questionId).subscribe(data => this.question=data );
       }
       else
       {
        alert("The Question Id is not within the range. Check 'Help(Question Details)' and try again!");
        this.router.navigate(['/QuestionList']);
       }
   }
   public deleteQuestion() : void
   {
      var r = confirm("Are you sure to delete question details?");
      if(r==true)
      {
      this.questionService.deleteQuestion(this.question.questionId).subscribe();
      this.router.navigate(['/QuestionList']);
      }
      else
      {
       alert("Operation Canceled");
       this.router.navigate(['/AdminHome']);
      }
   }
   ngOnInit()
   {
      //this.getBook();
   }

}