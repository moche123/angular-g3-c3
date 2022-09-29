import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-directive',
  templateUrl: './pipe-directive.component.html',
  styleUrls: ['./pipe-directive.component.scss']
})
export class PipeDirectiveComponent implements OnInit {

  public mode:string = 'light';
  constructor() { }

  public arrayPeople: any[] = [
    {
      name: 'Carlos',
      age: 20
    },
    {
      name: 'Fabio',
      age: 30
    },
    {
      name: 'Roberto',
      age: 25
    },
    {
      name: 'Julio',
      age: 15
    },
  ]

  ngOnInit(): void {
  }

  changeMode(){
    this.mode == 'light' ? this.mode='dark' : this.mode ='light'
  }

}
