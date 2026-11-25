import { Service } from '@angular/core';
import { ShoppingCartItem, ItemState } from '../types/items';

@Service()
export class ItemsService {
  private items: ShoppingCartItem[] = [];
  private allTags: string[] = [];

  public getItems(filter?: (item: ShoppingCartItem) => boolean): ShoppingCartItem[] {
    if (filter) {
      return this.items.filter(filter);
    }
    return this.items;
  }

  public addItem(item: ShoppingCartItem): void {
    this.items.push(item);
    item.tags.forEach((tag) => {
      if (!this.allTags.includes(tag)) {
        this.allTags.push(tag);
      }
    });
  }

  public editItem(item: ShoppingCartItem): void {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index === -1) {
      throw new Error(`Item with id ${item.id} not found`);
    }

    this.items[index] = item;
    this.allTags = [];
    this.items.forEach((i) => {
      i.tags.forEach((tag) => {
        if (!this.allTags.includes(tag)) {
          this.allTags.push(tag);
        }
      });
    });
  }

  public archiveItem(itemId: string): void {
    const index = this.items.findIndex((i) => i.id === itemId);
    if (index === -1) {
      throw new Error(`Item with id ${itemId} not found`);
    }
    this.items[index].archived = true;
  }

  public unarchiveItem(itemId: string): void {
    const index = this.items.findIndex((i) => i.id === itemId);
    if (index === -1) {
      throw new Error(`Item with id ${itemId} not found`);
    }
    this.items[index].archived = false;
  }

  public purchaseItem(itemId: string): void {
    const index = this.items.findIndex((i) => i.id === itemId);
    if (index === -1) {
      throw new Error(`Item with id ${itemId} not found`);
    }
    this.items[index].state = ItemState.Purchased;
    this.items[index].purchasedAt = new Date();
  }

  public getAllTags(): string[] {
    return this.allTags;
  }
}
