import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class UpdateService
{
   public constructor(private httpClient:HttpClient){ }
   
   public getQuestion(questionId:number)  : Observable<Question>
   {
      return this.httpClient.get<any>('http://localhost:8092/getQuestion/'+questionId);
   }

   public insertQuestion(question:Question) : any
   {
       return this.httpClient.post<any>('http://localhost:8092/addQuestion',question);
   }
   

} 