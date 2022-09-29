import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public numberParentChild: number = 7;
  public numberReceivedFromChild:number =0;

  constructor() { }

  ngOnInit(): void {
  }

  sendInfoToChild(){
    this.numberParentChild++
  }

  receiveFromChild(event:any){
    this.numberReceivedFromChild = event
  }

}
