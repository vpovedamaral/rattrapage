import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private urlApi = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  inscription(utilisateur: any): Observable<any> {
    return this.http.post<any>(this.urlApi, utilisateur);
  }

  connexion(email: string, motDePasse: string): Observable<any> {
    return this.http.get<any[]>(this.urlApi).pipe(
      map((utilisateurs) => {
        const utilisateurTrouve = utilisateurs.find(u =>
          u.email === email && u.motDePasse === motDePasse
        );
        if (utilisateurTrouve) {
          // stocker l'utilisateur ou simplement son nom en localStorage
          localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurTrouve));
          return utilisateurTrouve;
        }
        return null;
      })
    );
  }

  obtenirNomUtilisateurConnecte(): string | null {
    const userData = localStorage.getItem('utilisateurConnecte');
    if (userData) {
      const user = JSON.parse(userData);
      return user.nomUtilisateur;
    }
    return null;
  }
}
