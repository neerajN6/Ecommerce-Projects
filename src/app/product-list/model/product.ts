export class Product {
  id!: number;
  description!: string;
  img_url!: string;
  name!: string;
  price!: number;
  quantity!: number;

  constructor() {
    this.description = "";
    this.img_url = "";
    this.name = "";
    this.quantity = 0;
    this.price = 0;
  }
}
