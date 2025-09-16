import Image from 'next/image';

const RelatedBanner = () => {
  return (
    <section className="w-[1220px] mx-auto mt-8 bg-white rounded shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Ideas to Decorate Your Home with indoor plants</h3>
      <Image src="/images/relatedBanner.jpg" alt="Decorate Ideas" width={1220} height={300} className="rounded"/> 
    </section>
  );
};

export default RelatedBanner;
