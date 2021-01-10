import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();
  message : string;
  constructor(private livreService : LivreService) { }

  ngOnInit(): void {
  }

  addLivre(){
    //console.log(this.newLivre);
    this.livreService.ajouterLivre(this.newLivre);
    this.message = "Livre " + this.newLivre.nomLivre + " ajouter avec succés !";
  }

}
