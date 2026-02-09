import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, img: '/images/products/2-layer-bumboo.png', title: '2 Layer Lucky Bumboo', link: 'https://www.amazon.in/Treebazar-Layer-Bamboo-Indoor-Stones/dp/B0GJTFYW6W/ref=lp_27943762031_1_1?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 2, img: '/images/products/3-layer-bumboo.png', title: '3 Layer Lucky Bumboo', link: 'https://www.amazon.in/Treebazar-Live-Indoor-Plant-Natural/dp/B0GJTLWT6V/ref=lp_27943762031_1_2?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 3, img: '/images/products/5-layer-bumboo.png', title: '5 Layer Lucky Bumboo', link: 'https://www.amazon.in/Layer-Lucky-Bamboo-Indoor-Plant/dp/B0GKWFZSFX/ref=lp_27943762031_1_8?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=JJYBVQDHXTSF8X2DJ6KK&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 4, img: '/images/products/Echeveria-Laui Live.png', title: 'Echeveria Laui', link: 'https://www.amazon.in/Echeveria-Laui-Live-Succulent-Plant/dp/B0GL46BN37/ref=lp_27943762031_1_3?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 5, img: '/images/products/Zebra-Haworthia-Succulent-Live-Plant-with-Pot.png', title: 'Zebra Haworthia', link: 'https://www.amazon.in/Haworthia-Succulent-Decorative-Maintenance-Purifying/dp/B0GKTJDX9N/ref=lp_27943762031_1_4?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 6, img: '/images/products/money-plant.jpg', title: 'Live Money Plant', link: 'https://www.amazon.in/dp/B0GM8KN79S/ref=lp_27943762031_1_5?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' }, 
  { id: 7, img: '/images/products/snake.jpg', title: 'Live Snake Plant', link: 'https://www.amazon.in/dp/B0GM8KCLSL/ref=lp_27943762031_1_6?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 8, img: '/images/products/Gymnocalycium-Bruchii-Cactus Plant.png', title: 'Gymnocalycium Bruchii', link: 'https://www.amazon.in/Gymnocalycium-Bruchii-Flowering-Succulent-Decorative/dp/B0GL6LCDDY/ref=lp_27943762031_1_7?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  { id: 8, img: '/images/products/4-cactus.jpg', title: 'Succulent & Cactus', link: 'https://www.amazon.in/dp/B0GM91SD49/ref=lp_27943762031_1_9?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
];

const ProductGrid = () => {
  return (
    <section className="w-[1220px] mx-auto mt-8 ">
      <h3 className="text-xl font-semibold mb-4">Bestsellers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow hover:shadow-lg transition p-4">
          <Link href={product.link} target='_blank'>
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={200}
              className="rounded"
            />
            <h4 className="mt-2 text-gray-800 text-center">{product.title}</h4>
            <div className="mt-2 text-white bg-green-700 p-1 rounded-sm text-sm text-center w-full ">View Product</div>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
