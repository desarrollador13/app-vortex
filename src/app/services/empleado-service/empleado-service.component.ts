import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-empleado-service',
  templateUrl: './empleado-service.component.html',
  styleUrls: ['./empleado-service.component.css']
})
export class EmpleadoServiceComponent implements OnInit {
	private url:string;

  constructor(
  	private http: HttpClient
  ) { 
  	this.url = 'http://localhost:3000/api/'
  }

  ngOnInit() {
  }

  postData(body){
    const myObjStr = JSON.stringify(body);
    return  this.http.post(`${this.url}empleados/create/`,body);
  }

  getData(){
    return  this.http.get(`${this.url}empleados/list/`,{});
  }

  deleteData(id){
    return  this.http.delete(`${this.url}empleados/delete/${id}`,{});
  }

  updateData(body, id){
    return  this.http.put(`${this.url}empleados/edit/${id}`,body);
  }

}
