// types.ts
export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: string | number;
  mrp: number;
  discount: number;
  deliveryDate: string;
}

// export interface Productlisting {
//   id: number;
//   title: string;
//   price: string | number;
//   image: string;
//   tag: string;
//   shipping: string;
// }