import { Injectable } from '@angular/core'

import { DirectusService } from './directus.service'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LanauvaApiService {

  constructor(private directus : DirectusService) { }


  empreses() : Observable<[Empresa]> {
    return this.directus.collection('empreses')
            .map( dataCollection => 
              dataCollection.map( dataElement => dataElement as Empresa ) 
            )
  }

  empresa(id :number){
    return this.directus.element('empresa',id)
            .map
  }

}

export class Empresa{

  nom : string

  constructor(nom :string){
    this.nom = nom
  }

}
