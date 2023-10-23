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
        // una get verso un indirizzo che da una risposta
        this.http
            .get(" www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200")
            .subscribe((response: any) => {
                console.log(response);
                this.drinks = response.drinks;
            });
    }
}