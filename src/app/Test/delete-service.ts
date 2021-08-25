import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class DeleteTestService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getTestDetails(testId:number)  : Observable<Test>     //Observable<Test>
   {
      return this.httpClient.get<any>('http://localhost:8093/getTestDetails/'+testId);
   }
   public deleteTest(testId:number) : any
   {
       return this.httpClient.delete<any>('http://localhost:8093/deleteTest/'+testId);
   }

} 