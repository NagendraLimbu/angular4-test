import { Component } from '@angular/core';
import {DataService} from './data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">Animate Me</p>
  <h1>{{someProperty}}</h1>
  <h1 [ngClass]="titleClass">Hey Guys!</h1>
  <h2 [style.color] = "titleStyle">Nagendra Limbu</h2>
  <h2 [style.color] = "titleStyle ? 'green':'pink'"> css ternary condition</h2>
  <button (click) = "myEvent($event)"> My Button</button>
  `,
  styles: [`
  
    h1 {
      text-decoration:underline;
    }

    .red-title{
      color:red;
    }

    .large-title {
      font-size: 4em;
    }
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }
  
  `],
  animations:[
    trigger('myAwesomeAnimation', [
      state('small',style({
        transform:'scale(1)',
      })),
       state('large',style({
        transform:'scale(1.5)',
      })),
      transition('small <=> large', animate('300ms ease-in') ),
    ])
  ]
})
export class AppComponent {

  constructor(private dataService:DataService){

  }

state: string = 'small'

animateMe(){
  this.state = (this.state==='small'?'large':'small');
}


  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty=this.dataService.meData();
  }

  someProperty:string = '';

  myEvent(event){
    console.log(event);
  }

  // titleClass= 'red-title';
  titleClass = {
    'red-title' : true,
    'large-title': true
  }

  titleStyle = true;
}
