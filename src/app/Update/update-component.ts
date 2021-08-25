import { Component , OnInit } from '@angular/core';
import { UpdateService } from './update-service';
import { Question } from './question';
import {Router} from '@angular/router';
@Component({
    selector: 'update-question',
    templateUrl: './update-component.html'
})
export class UpdateComponent implements OnInit
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
   public constructor(private updateService:UpdateService, private router :Router){}
   public getQuestion():void
   {
        //this.book = this.bookService.getBook(1);
       if(this.question.questionId >= 0 && this.question.questionId<=16)
       {
       this.updateService.getQuestion(this.question.questionId).subscribe(data => this.question=data );
       }
       else
       {
        alert("The Question Id is not within the range. Check 'Help(Question Details)' and try again!");
        this.router.navigate(['/QuestionList']);
       }
   }
   public insertQuestion() : void
   {
      this.updateService.insertQuestion(this.question).subscribe();
      var r=confirm("Question details modified!To check the modified and redirect to this page click on 'OK' or click on 'Cancel' to reach home page");
      if(r==true)
      {
        this.router.navigate(['/QuestionList']);
      }
     else
      {
       this.router.navigate(['/AdminHome']);
      }
   }
   ngOnInit()
   {
      //this.getBook();
   }

}