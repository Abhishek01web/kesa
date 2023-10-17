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
            img: '/category/4.png',
        },
        {
            img: '/category/5.png',
        }
    ]

    return (
        <section className='w-[100%] flex flex-col items-center justify-center'>
            <section className='flex items-center justify-center m-10'>
                <h1 className='text-[28px] text-black font-oswald font-bold md:text-[32px]' >Product Gallery</h1>
            </section>
            <section className='w-[90%]'>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        {
                            gallery.map(({ img }, i) => {
                                return (
                                    <div key={i}>
                                        <img
                                            class="h-auto max-w-full rounded-lg"
                                            src={img}
                                            alt=""
                                        />
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

export default Gallery 
