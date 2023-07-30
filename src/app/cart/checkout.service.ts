import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = environment.apiURL + '/checkout';

  constructor(private http: HttpClient) {}

  checkoutCart(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiUrl, products);
  }
}
