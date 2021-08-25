import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class InsertService
{
   public constructor(private httpClient:HttpClient){ }
   public insertQuestion(question:Question) : any
   {
       return this.httpClient.post<any>('http://localhost:8092/addQuestion',question);
   }
   

} 