// components/ProductGallery.tsx
import Image from "next/image";

const images = [
  "/images/viewd-banner.jpg",
  "/images/product-item.jpg",
  "/images/product-item.jpg",
  "/images/product-item.jpg",
];

export default function ProductGallery() {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="aspect-square relative w-full">
        <Image
          src={images[0]}
          alt="Main product image"
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex space-x-2 mt-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            width={80}
            height={80}
            className="rounded border cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
