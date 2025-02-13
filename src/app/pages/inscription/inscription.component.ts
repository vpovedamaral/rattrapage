import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent implements OnInit {
  formInscription!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInscription = this.fb.group({
      nomUtilisateur: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  sInscrire(): void {
    if (this.formInscription.valid) {
      const nouvelUtilisateur = this.formInscription.value;
      this.utilisateurService.inscription(nouvelUtilisateur).subscribe((res) => {
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        this.router.navigate(['/connexion']);
      });
    }
  }
}
