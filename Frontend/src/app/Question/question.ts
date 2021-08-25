export class Question
{
  questionId:number;
  questionContent:string;
  option1:string;
  option2:string;
  option3:string;
  marks:number;
  answerOption:number;
  public constructor(questionId:number,questionContent:string,option1:string,option2:string,option3:string,marks:number,answerOption:number)
  {
   this.questionId=questionId;
   this.questionContent=questionContent;
   this.option1=option1;
   this.option2=option2;
   this.option3=option3;
   this.marks=marks;
   this.answerOption=answerOption;
  }
}