export class Result
{
  questionId:number;
  correctAns:number;
  public constructor(questionId:number, correctAns:number)
  {
   this.questionId = questionId;
   this.correctAns = correctAns;
  }
}