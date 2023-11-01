import React from 'react';
import ProductCard from './ProductCart';
import FilterProducts from './FilterProducts';

const Products = () => {

    return (
        <section className="overflow-hidden">
            <section className='h-[100px] w-[full] flex flex-col justify-center items-center gap-3'>
                <h1 className='text-[28px] text-black font-oswald font-bold md:text-[32px]'>Product Heading</h1>
                <p className='text-[16px] md:font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
            <section className='flex items-cnter justify-center'>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2 overflow-hidden md:px-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </section>
        </section>
    )
}

export default Products;