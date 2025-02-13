import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  produit: any; // Vous pouvez typer l'objet si vous avez une interface, ex: Produit

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) { }

  ngOnInit(): void {
    // Récupération du paramètre "id" dans l’URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);

      // Appel au service pour récupérer les détails du produit
      this.produitService.obtenirProduitParId(id).subscribe((data) => {
        this.produit = data;
      });
    }
  }
}
