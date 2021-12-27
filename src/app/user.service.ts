import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost:3000/employee/"
  
  
  createUser(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data)
  }


  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  getuserbyId(id:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+id)
  }


  deleteUser(id:any,):Observable<any>{
    return this.http.delete<any>(this.baseUrl+id).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }


  updateUser(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+id,data).pipe(
      catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }

  
  deleteUserByName(name:any,):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'deletebyName/'+name).pipe(
            catchError(val => of(`I caught: ${val}`)));  // to handle the error
  }

 
  
}
