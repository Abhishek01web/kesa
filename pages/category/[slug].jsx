import React from 'react';
import { useRouter } from 'next/router'
import Wrapper from '@/components/wrapper';
import ProductCard from '@/components/ProductCart';

const category = () => {
  const rout = useRouter();
  const { slug } = rout.query;

  return (
    <section className='mt-[120px]'>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-10">
          <h1 className='uppercase text-[28px] text-black text-center font-oswald font-bold md:text-[32px]'>{slug}</h1>
          <p className="mb-4 text-center dark:text-black">Discover Our Handpicked Collection of Exquisite Jewelry Pieces</p>
        </div>

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </section>
  )
}

export default category;