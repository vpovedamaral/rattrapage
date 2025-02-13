import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private urlApi = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  listerProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi);
  }

  obtenirProduitParId(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${id}`);
  }
}
