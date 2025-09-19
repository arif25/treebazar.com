import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-[1220px] mx-auto bg-white mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between border-gray-300 border">
          <Image src="/images/banner-image-01.jpg" alt="Plant" className="w-full h-auto" width={1220} height={600} layout='responsive' />
      </div>
    </div>
  );
};

export default Banner;
