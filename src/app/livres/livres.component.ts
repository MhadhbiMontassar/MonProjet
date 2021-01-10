import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {
  livres : Livre[];
  
  constructor(private livreService : LivreService ){
    
    this.livres = livreService.listeLivre();

   }

  ngOnInit(): void {
    
  }

}
