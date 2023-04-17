import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpclient: any;

  constructor(private http:HttpClient) {}

registerdata(model: Model){
return this.http.post('http://localhost:8080/student/addStudent',model,{responseType: 'text'})
}

public getAll(){
return this.httpclient.get('http://localhost:8080/student/grtAll')


}

 
}
