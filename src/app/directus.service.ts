import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DirectusService {

  base_url = "http://localhost:8080/api/1.1/" //"http://localhost:8888/directus/api/1.1/"

  constructor(private http: Http) { }

  makeCall(url:string){

    return this.http.get(url) 
        .retry(3)
        .map( (res:Response) => res.json() ) 
        .map( data => 
          data.data
        )
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  tableURL(name :string){
    return this.base_url + 'tables/' + name + '/rows'
  }


  collection(name :string){
    return this.makeCall( this.tableURL( name ) )
  }

  element(collectionName :string, id:number){
    return this.makeCall( this.tableURL( collectionName ) + '/' + id )
  }

}
