'use client';

import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Categories } from '@/components/home/Categories';
import { useMockData } from '@/hooks/useMockData';

export default function HomePage() {
  const { products } = useMockData();

  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts products={products} />
    </div>
  );
}