export class OrderEntity {
  id: number;                  // Corresponds to Long in Java
  orderItems: OrderItem[];     // Array of OrderItem objects
  totalPrice: number;          // Corresponds to Double in Java

  constructor(id: number, orderItems: OrderItem[], totalPrice: number) {
    this.id = id;
    this.orderItems = orderItems;
    this.totalPrice = totalPrice;
  }
}

export class OrderItem {
  productId: number;
  quantity: number;
  productPrice: number; // Add this if you need the price per product

  constructor(productId: number, quantity: number, productPrice: number) {
    this.productId = productId;
    this.quantity = quantity;
    this.productPrice = productPrice;
  }
}
