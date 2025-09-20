// components/CartItem.tsx
import Image from 'next/image'
import { useState } from 'react'

interface CartItemProps {
  title: string
  price: number
  quantity: number
  image: string
}

export default function CartItem({ title, price, quantity: initialQty, image }: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQty)

  return (
    <div className="flex border-b border-[#ccc] py-4shadow-md py-3">
      <Image src={image} alt={title} width={150} height={150} className="rounded-md" />
      <div className="ml-4 flex-1">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-green-600 text-sm mt-1">In Stock</p>
        <p className="text-sm text-gray-600 mt-1">Sold by TreeBazar.com</p>

        <div className="mt-4 flex items-center space-x-2">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >-</button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setQuantity(q => q + 1)}
          >+</button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold">₹{price.toFixed(2)}</p>
      </div>
    </div>
  )
}
