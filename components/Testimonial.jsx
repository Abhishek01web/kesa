import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import FeedbackCard from './FeedbackCard';

const Testimonial = () => {

    const feedback = [
        {
            id: "feedback-1",
            content:
                "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            name: "Herman Jensen",
            title: "Founder & Leader",
            img: "https://i.imgur.com/Dn0qoCG.png",
        },
        {
            id: "feedback-2",
            content:
                "Money makes your life easier. If you're lucky to have it, you're lucky.",
            name: "Steve Mark",
            title: "Founder & Leader",
            img: "https://i.imgur.com/fk8eEvW.png",
        },
        {
            id: "feedback-3",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            img: "https://i.imgur.com/dLxxRDy.png",
        },
        {
            id: "feedback-4",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            img: "https://i.imgur.com/dLxxRDy.png",
        },
        {
            id: "feedback-5",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            img: "https://i.imgur.com/dLxxRDy.png",
        },
        {
            id: "feedback-6",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            img: "https://i.imgur.com/dLxxRDy.png",
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='w-[100%] p-0 md:p-10'>
            <section className='flex items-center justify-center m-10'>
                <h1 className='text-[28px] text-black font-oswald font-bold md:text-[32px]' >Testimonials</h1>
            </section>
            <section>
                <Carousel
                    responsive={responsive}
                    itemClass=''
                    autoPlay
                    autoPlaySpeed={2000}
                    infinite
                >
                    {
                        feedback.map((data) => {
                            return (
                                <FeedbackCard key={data.id} {...data} />
                            )
                        })

                    }
                </Carousel>
            </section>
        </section >
    )
}

export default Testimonial;
