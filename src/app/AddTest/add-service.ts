import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class AddTestService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getTestDetails(testId:number)  : Observable<Test>     //Observable<Test>
   {
      return this.httpClient.get<any>('http://localhost:8093/getTestDetails/'+testId);
   }

   public getTests() : Observable<Test[]>
   {
      return this.httpClient.get<Test[]>('http://localhost:8093/getTests');
   }
   public insertTest(test:Test) : any
   {
       return this.httpClient.post<any>('http://localhost:8093/addTest',test);
   }
}