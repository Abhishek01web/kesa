import React from 'react'

const Gallery = () => {

    const gallery = [
        {
            img: '/category/1.png',
        },
        {
            img: '/category/2.png',
        },
        {
            img: '/category/3.png',
        },
        {
            img: '/category/1.png',
        },
        {
            img: '/category/2.png',
        },
        {
            img: '/category/3.png',
        }
    ]

    return (
        <section className='w-[100%] flex flex-col items-center justify-center'>
            <section className='flex flex-col items-center justify-center m-10'>
                <h1 className='uppercase text-[28px] text-black text-center font-oswald font-bold md:text-[32px]'>Featured Gems Sparkle in Elegance</h1>
                <p className="mb-4 text-center dark:text-black">Discover Our Handpicked Collection of Exquisite Jewelry Pieces</p>
            </section>
            <section>
                <div class="container mx-auto px-5 py-2 lg:px-32">
                    <div class="-m-1 flex flex-wrap md:-m-2">
                        {
                            gallery.map(({ img }, i) => {
                                return (
                                    <div class="flex w-1/3 flex-wrap" key={i}>
                                        <div class="w-full p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                class="block h-full w-full rounded-lg object-cover object-center"
                                                src={img} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </section >
    )
}

export default Gallery; 
