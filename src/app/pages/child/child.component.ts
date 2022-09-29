import { AfterViewInit, Component, ElementRef, Input, 
  OnChanges, OnInit, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,AfterViewInit{

  @ViewChild("childElement") childElement: ElementRef = {} as ElementRef;


  @Input () numberFromParentToChild:number = 0;
  @Output () numberFromChildToParent:EventEmitter<number> = new EventEmitter();

  public numberSendToParent:number = 20

  constructor() { 
    console.log('CONSTRUCTOR DESDE EL COMPONENTE HIJO')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  
  
  ngOnInit(): void {
    console.log(this.childElement)
    console.log('NG ON INIT DESDE EL COMPONENTE HIJO')
  }
  
  ngAfterViewInit(): void {
    console.log(this.childElement)
    console.log('ngAfterViewInit DESDE EL COMPONENTE HIJO')
    this.childElement.nativeElement.style.backgroundColor = '#cc87cc'

  }
  

  sendToParent(){
    this.numberFromChildToParent.emit(++this.numberSendToParent)
  }

}
