import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres : Livre[];
  constructor() {
    this.livres = [
      {idLivre : 1, nomLivre : "learn test", prixLivre:120.000, dateCreation : new Date("01/10/2011")},
      {idLivre : 2, nomLivre : "learn CSS", prixLivre:110.000, dateCreation : new Date("01/10/2012")},
      {idLivre : 3, nomLivre : "learn JS", prixLivre:100.000, dateCreation : new Date("01/10/2013")},
    ];
   }
   listeLivre():Livre[]{
     return this.livres;
   }
   ajouterLivre(livre : Livre){
     this.livres.push(livre);

   }
}
