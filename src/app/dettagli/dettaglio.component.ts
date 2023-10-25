import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {

  drinks: any = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
 
         this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200').subscribe( ( res: any) => {
           console.log(res);
           this.drinks = res.drinks;
         })
}

}