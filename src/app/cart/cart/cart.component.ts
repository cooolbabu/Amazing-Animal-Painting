import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private apiURL = environment.apiURL + '/cart';

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private checkoutCartService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    console.log('Clear button clicked');
    this.cartService.clearCart().subscribe();
  }

  checkoutCart(): void {
    console.log('Checkout button clicked');
    this.checkoutCartService.checkoutCart(this.cartItems).subscribe();
  }
}
