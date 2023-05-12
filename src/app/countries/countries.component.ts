import { Component, OnInit } from '@angular/core';
import { countryInfo } from '../countryInfo';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  Mycountries: countryInfo[]=[]
  constructor() { }

  ngOnInit(): void {
    
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
                  let c= new countryInfo();
                  c.name=json[i].name.common;
                  c.flag=json[i].flags.png;
                  c.population=json[i].population;
                  c.capital=json[i].capital;

                  this.Mycountries.push(c) 
        }
      })
  }

}
// class countryInfo
// {
//   name: string ='';
//   capital: string ='';
//   flag: string ='';
//   population:number=0;
// }
