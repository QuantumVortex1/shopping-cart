import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header/header';
import { Footer } from './footer/footer/footer';
import { ItemList } from './main/item-list/item-list';

@Component({
  imports: [RouterOutlet, Header, Footer, ItemList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shopping-cart');
}
