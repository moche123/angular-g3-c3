import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public title:string = ''
  public characterList: any = ''
  public observablelist$:any

  public mockData:any[] = [
    {
      name: 'Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      name: 'Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      name: 'Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    }
  ]

  constructor(
    private apiService:ApiService
  ) {
    this.title = 'Personajes'
    
   }

   //! TODO: Simular una llamada asincrona -------> Pista es usar promesas


  // ngOnInit(): void {
  //   this.apiService.getCharacter().subscribe(res => {
  //     this.characterList = res
  //   })
  ngOnInit(): void {
    this.observablelist$ = this.apiService.getCharacter()
  }

}
