import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../services/utilisateur.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nomUtilisateur: string | null = null;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.nomUtilisateur = this.utilisateurService.obtenirNomUtilisateurConnecte();
  }
}
