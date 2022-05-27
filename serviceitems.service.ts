import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceitemsService {

  constructor(private _http:HttpClient) { }
todolistitems(){
    return this._http.get("http://localhost:3000/array")
}
postdata(sre:any){
  return this._http.post("http://localhost:3000/array",sre)
}
deletedata(id:any){
  return this._http.delete("http://localhost:3000/array/"+id)
}
updatedata(emp:any){
  //console.log("This is emp"+emp)
  return this._http.put("http://localhost:3000/array/"+emp.id,emp)
}

}
