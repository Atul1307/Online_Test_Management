import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './test';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class UpdateTestService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getTestDetails(testId:number)  : Observable<Test>     //Observable<Test>
   {
      return this.httpClient.get<any>('http://localhost:8093/getTestDetails/'+testId);
   }
   public updateTest(test:Test) : any
   {
       return this.httpClient.put<any>('http://localhost:8093/updateTest',test);
   }
}