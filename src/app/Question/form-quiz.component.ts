import {  Component , Input, OnInit} from '@angular/core';
import { QuestionService } from './question-service';
import { Question } from './question';
//import { CountdownModule} from 'ngx-countdown';
@Component({
   selector: 'form-quiz',  
   templateUrl: './form-quiz.component.html',
})
export class FormQuizComponent implements OnInit
{
   questions:Question[];
   ans:any[]=[];
   marks:number=0;
   displayMarks:boolean=false;
   clicked :boolean=false;
   takeTestClicked :boolean=false;

    public constructor(private questionService:QuestionService){}


    public getQuestions():void
    {
       this.takeTestClicked =true;
       this.questionService.getQuestions().subscribe(data => this.questions=data);
    }
        
    getMarks():void
     {
 
         for(var i=0;i<this.questions.length;i++)
         {
              console.log(this.questions[i].answerOption+'   selected option '+this.ans[i]);
         } 
         this.countMarks();
         console.log('Marks Scored '+this.marks);
         for(var i=0;i<this.ans.length;i++)
         {
              console.log('Question No : '+(i+1)+' :');
              if(this.ans[i]!=0) console.log('Correct');
              else console.log('Wrong'); 
         } 
         this.displayMarks=true;
    }
    ngOnInit(){}

    getSelectedOption(option:number,index:number)
    {
        /*alert(cBox.value+'  '+index);
        if(cBox.selected) this.ans[index]=cBox.value; */
         this.ans[index]=option;
         console.log('selected OPtion is '+this.ans[index]);        
    } 
    countMarks()
    {
        for(var i = 0; i < this.questions.length;i++)
        { 
           if(this.ans[i]==this.questions[i].answerOption)
                this.marks++;
           else
                this.ans[i]=0;        
        }   
    } 


}