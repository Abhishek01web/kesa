import React from 'react'
import Link from 'next/link';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {

    const data = [
        {
            img: '/category/1.png',
            text: "Rings",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/2.png',
            text: "Necklaces",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/cat.webp',
            text: "Earings",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/4.png',
            text: "Best Collection",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/5.png',
            text: "Earings",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/1.png',
            text: "Rings",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/2.png',
            text: "Necklaces",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/3.png',
            text: "Earings",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/4.png',
            text: "Best Collection",
            btn: "View All",
            url: "/category/"
        },
        {
            img: '/category/5.png',
            text: "Earings",
            btn: "View All",
            url: "/category/"
        }
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2,
        },
    };



    return (
        <>
            <div className="w-[100%] mt-[10px] md:mt-[10px] mb-[10px] md:mb-0">
                {/* <div className="text-2xl font-bold mb-5">You Might Also Like</div> */}
                <Carousel
                    responsive={responsive}
                    itemClass="px-[5px] md:px-[10px]"
                    autoPlay
                    autoPlaySpeed={2000}
                    infinite
                >
                    {
                        data.map((elm, i) => {
                            const { img, text, btn, url } = elm;

                            return (
                                <Link href={`/category/${elm.text}`} key={i} >
                                    <section className='relative transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
                                        <img src={img} alt="img" className='w-full h-[180px] md:h-[320px]' />
                                        <div className='absolute top-[75%] md:top-[82%] left-2 md:left-5 text-[12px] md:text-[18px] text-white drop-shadow-lg' >
                                            <p className='p-1 md:p-2 text-white text-shadow-lg rounded-lg duration-200'>{text}</p>
                                        </div>
                                    </section>
                                </Link>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Categories;