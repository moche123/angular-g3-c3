import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApiService {

  private url:string = 'https://rickandmortyapi.com/api/character';

  constructor(private http:HttpClient) { }

  public getCharacter(): Observable< any[] >{
    return this.http.get<any[]>(this.url)
      .pipe(
        map( (pokemon:any) => pokemon.results )
      ) 
  }




}
