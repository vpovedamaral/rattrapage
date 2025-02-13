import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  formConnexion!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formConnexion = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  seConnecter(): void {
    if (this.formConnexion.valid) {
      const { email, motDePasse } = this.formConnexion.value;
      // Appel au service pour valider la connexion
      this.utilisateurService.connexion(email, motDePasse).subscribe((utilisateur) => {
        if (utilisateur) {
          // Redirection vers l'accueil
          this.router.navigate(['/accueil']);
        } else {
          alert('Identifiants invalides');
        }
      });
    }
  }
}
