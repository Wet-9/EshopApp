

//structure from Google API
export interface ProductAPI {
  id: number;
  productSKU: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  // createdAt: string;  // Not needed
  // updatedAt: string;  // Not needed
  subCategoryId: number;
  productURL: string;
  productSPEC: string;
}

// (Hard Coded Mock Example)
// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
//   }



// Harded coded products
  // export const MOCK_PRODUCTS: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Laptop',
  //     description: 'A high-quality laptop',
  //     price: 999,
  //     imageUrl: './assets/test1.jpeg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Phone',
  //     description: 'A smartphone with a great camera',
  //     price: 699,
  //     imageUrl: './assets/test1.jpeg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Watch',
  //     description: 'A stylish wrist watch',
  //     price: 299,
  //     imageUrl: './assets/test1.jpeg'
  //   }
  // ];
  