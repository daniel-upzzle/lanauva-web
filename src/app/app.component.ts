import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { DirectusService } from './directus.service';
import { LanauvaApiService, Empresa } from './lanauva-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lanauva';

  empreses : Observable<[Empresa]>
  selected : Observable<any>

  constructor(private api: LanauvaApiService) { 

    this.empreses = api.empreses() //directus.collection( "empreses" )
    this.selected = null //directus.element("empreses",1)

  }
}


