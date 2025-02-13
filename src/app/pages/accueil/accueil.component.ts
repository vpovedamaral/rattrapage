import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { UtilisateurService } from '../../services/utilisateur.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.obtenirProduits();
  }

  obtenirProduits(): void {
    this.produitService.listerProduits()
      .subscribe((data) => {
        this.produits = data;
      });
  }
}
