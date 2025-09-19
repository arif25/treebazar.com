// pages/cart.tsx

'use client';
import Link from 'next/link';
import CartItem from './CartItem';
import RelatedProducts from './RelatedProducts';

export default function CartPage() {
  const items = [
    { id: 1, title: 'TAXOZY Plant Stands...', price: 1099, quantity: 2, image: '/images/product-item.jpg' },
    { id: 2, title: 'TAXOZY Plant Stands...', price: 1099, quantity: 1, image: '/images/product-item.jpg' },
    { id: 3, title: 'TAXOZY Plant Stands...', price: 1099, quantity: 3, image: '/images/product-item.jpg' },
  ]

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="w-[1220px] mx-auto bg-white p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {items.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div>
        <div className="border p-4 rounded-md mb-4">
          <p className="text-lg font-semibold">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items): ₹{subtotal}</p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
             <Link href="./checkout"> Proceed to Buy</Link>
          </button>
        </div>
        <RelatedProducts />
      </div>
    </div>
  )
}
