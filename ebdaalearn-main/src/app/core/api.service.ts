import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAllCourses(): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Courses/GetAllCourses`);
  }

  public getOneCourseById(CourseId): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Courses/GetOneCourse?CourseId=${CourseId}`);
  }

  public getAllTeachers(): Observable<any> {
    return this.httpClient.get(`${environment.url_api}Teachers/GetAllTeachers`);
  }

 
//statistics
getAllStatistics(){
  return this.httpClient.get(`${environment.url_api}Statistics/GetStatistics`)
  
}

//register
register(userInfo){

 return this.httpClient.post(`${environment.url_api}Account/Register`,userInfo)
}

//login
loginUser(LoginData){
  return  this.httpClient.post<any>(`${environment.url_api}Account/GetToken`,LoginData)
}

//forget password
sendCodeTomaile(Mymaile){
  return this.httpClient.post(`${environment.url_api}Account/SendCode`,Mymaile)
}

//changePassword
forgetpassword(mycode){
  return this.httpClient.post(`${environment.url_api}Account/ForgetPassword`,mycode)
}

//change password
ChangeMYPassword(myNewData){
  return this.httpClient.post(`${environment.url_api}Account/ChangePassword`,myNewData)

}

//contact Us
contact(object){
  return this.httpClient.post(`${environment.url_api}ContactUs/AddNewContactUs`,object)

}



//part of admin
//delete teacher 
deleteteacher(idteach){
// let headers =new Headers();
var t = localStorage.getItem('token');
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// var t = localStorage.getItem('token');
// headers.append("Authorization", "Bearer " + t )
// console.log(headers)
 return  this.httpClient.delete(`${environment.url_api}Teachers/DeleteTeachers?TeachersId=${idteach}`,
 {headers}
 )

 alert(" تم الحذف ")
//  location .reload() ;
}

getToken(){
  return localStorage.getItem('token')
}

//add teacher 
addTeacher(teachobj){
  var t = localStorage.getItem('token');
  // console.log( "token fron jhgvf "+t)
  // console.log("from api i  receve  "+teachobj)
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// console.log("kjhgfghjk"+headers)
  return this.httpClient.post(`${environment.url_api}Teachers/AddNewTeacher`,teachobj,
  {headers}
  
  )
}

//delete Course 
deleteCourse(CoursID){
  var t = localStorage.getItem('token');
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// var t = localStorage.getItem('token');
// headers.append("Authorization", "Bearer " + t )
// console.log(headers)
 return  this.httpClient.delete(`${environment.url_api}Courses/DeleteCourses?CoursesId=${CoursID}`,
 {headers}
 )

 alert(" تم الحذف ")
}

//addCourse
addCourse(courseobj){
  var t = localStorage.getItem('token');
  // console.log( "token fron jhgvf "+t)
  // console.log("object is "+courseobj)
let headers: HttpHeaders = new HttpHeaders();
headers = headers.set('Accept', 'application/json');
headers = headers.set('Accept', 'application/json');
headers = headers.set('Authorization', `Bearer ${t}`);
// console.log("kjhgfghjk"+headers)
  return this.httpClient.post(`${environment.url_api}Courses/AddNewCourse`,courseobj,
  {headers}
  
  )
  
}

}