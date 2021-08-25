import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class ResultService
{
   public constructor(private httpClient:HttpClient){ }
   public insertResult(result:Result) : any  
   {
    return this.httpClient.post<any>('http://localhost:8094/addResult',result);
   }
}
