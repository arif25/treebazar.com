// components/RelatedProducts.tsx
import Image from 'next/image'

const related = [
  {
    id: 1,
    title: 'Dime Store Wooden Multipurpose Plant Stand',
    price: 349,
    image: '/images/product-item.jpg', // use your actual image path
    rating: 4,
  },
  // duplicate as needed
]

export default function RelatedProducts() {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-semibold mb-3">Products related to items in your cart</h3>
      {related.map(item => (
        <div key={item.id} className="flex items-center mb-4">
          <Image src={item.image} alt={item.title} width={60} height={60} className="rounded" />
          <div className="ml-3 text-sm">
            <p>{item.title}</p>
            <p className="font-semibold mt-1">₹{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
