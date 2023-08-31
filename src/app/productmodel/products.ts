//structure
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
// Harded coded products
  export const MOCK_PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high-quality laptop',
      price: 999,
      imageUrl: 'https://example.com/laptop.jpg'
    },
    {
      id: 2,
      name: 'Phone',
      description: 'A smartphone with a great camera',
      price: 699,
      imageUrl: 'https://example.com/phone.jpg'
    },
    {
      id: 3,
      name: 'Watch',
      description: 'A stylish wrist watch',
      price: 299,
      imageUrl: 'https://example.com/watch.jpg'
    }
  ];
  