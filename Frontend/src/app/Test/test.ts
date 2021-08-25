export class Test
{
    testId:number;
    testDate:Date;
    testTitle:string;
    testDuration:string;
    testTotalMarks:number;
    public constructor(testId:number,testDate:Date, testTitle:string, testDuration:string, testTotalMarks:number) 
{

    
    this.testId = testId;
    this.testDate = testDate;
    this.testTitle = testTitle;
    this.testDuration = testDuration;
    this.testTotalMarks = testTotalMarks;
}
}