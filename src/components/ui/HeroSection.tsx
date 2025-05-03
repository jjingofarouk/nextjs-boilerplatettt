import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-96 flex items-center justify-center">
      <Image
        src="/images/banners/hero-banner.jpg"
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">Find Your Opportunity</h1>
        <p className="mt-2">Grants, fellowships, scholarships, and more.</p>
      </div>
    </section>
  );
}
