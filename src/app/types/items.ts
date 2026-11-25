export class ShoppingCartItem {
  public id!: string;
  public name!: string;
  public price: number = 0;
  public url: string = '';
  public imageUrl: string | null = null;
  public tags: string[] = [];
  public archived: boolean = false;
  public state: ItemState = ItemState.Planned;
  public priority: 1 | 2 | 3 | 4 | 5 = 1;
  public purchasedAt: Date | null = null;

  constructor(
    init: Pick<ShoppingCartItem, 'name'> &
      Partial<Omit<ShoppingCartItem, 'id' | 'name'>>,
  ) {
    Object.defineProperty(this, 'id', {
      value: Math.random().toString(36).substr(2, 9),
      writable: false,
      enumerable: true,
    });
    Object.assign(this, init);
  }
}

export enum ItemState {
  Planned,
  InCart,
  Purchased,
}
