import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
@Input() name:string='lebanon'
@Input() capital:string=''
@Input() flag:string='./assets/lebanon.jpg'
@Input() population:number=0;
lastvisitdate="04-05-2023"
  constructor() { 
  }
lastvisitdatefunc(){
  alert(this.lastvisitdate)
}
popula(){
  alert(this.population)
}
  ngOnInit(): void {
  }

}
