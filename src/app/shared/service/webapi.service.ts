import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOfJobs } from '../model/listOfJobs.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebapiService {


  public getlistofjobs(): Observable<ListOfJobs> {
    return this.http.get<ListOfJobs>('https://api.myjson.com/bins/kez8a');
  }

  constructor(private http: HttpClient) { }
}
