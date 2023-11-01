import React from "react";
import Wrapper from "./wrapper";

import Link from "next/link";
import { SlSocialInstagram, SlSocialYoutube, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'
import { FaPhoneSquareAlt, FaMailBulk } from 'react-icons/fa'

const data = [
    {
        id: 1,
        link: "Privacy Policy",
        url: "/privacypolicy",
    },
    {
        id: 2,
        link: " Terms Of Service",
        url: "/termsofservice",
    },
    {
        id: 3,
        link: "Shipping Policy",
        url: "/shippingpolicy",
    },
    {
        id: 4,
        link: "Return & Exchange Policy",
        url: "/returnandexchangepolicy",
    }
]

const dataPages = [
    {
        id: 1,
        link: "Shop",
        url: "/",
    },
    {
        id: 2,
        link: "Home",
        url: "/",
    },
    {
        id: 3,
        link: "About",
        url: "/about",
    },
    {
        id: 4,
        link: "Contact Us",
        url: "/contact",
    },
    {
        id: 5,
        link: "custom product",
        url: "/customproduct",
    },
]

const socialIcons = [
    {
        id: 1,
        icons: <SlSocialInstagram />,
        url: "https://www.instagram.com/"
    },
    {
        id: 2,
        icons: <SlSocialYoutube />,
        url: "https://www.instagram.com/"
    },
    {
        id: 3,
        icons: <SlSocialFacebook />,
        url: "https://www.instagram.com/"
    },
    {
        id: 4,
        icons: <SlSocialTwitter />,
        url: "https://www.instagram.com/"
    }
]

const Footer = () => {
    return (
        <footer className={`h-[100%] mt-[40px]  bg-black py-8`}>
            <Wrapper className={`max-w-[1400px] flex flex-col items-start justify-between gap-2 md:gap-5 md:flex-row p-5`}>
                <section className="w-[90%] md:w-[30%] flex flex-col justify-between items-center">
                    <div className="">
                        <Link href="/">
                            <img
                                src="/kesha-logo.png"
                                alt="logo"
                                className="w-[80px] md:w-[100px] lg:w-[120px]"
                            />
                        </Link>
                    </div>
                    <div className="text-white text-[16px] text-center mt-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic asperiores, deleniti ad nihil reiciendis vero alias incidunt illo atque quidem ipsum dolores vel quod aspernatur.</p>
                    </div>
                    <div className="social-icons my-[30px]">
                        <div className="flex gap-4">
                            {
                                socialIcons?.map((elm) => (
                                    <Link href={`${elm.url}`} key={elm.id} className="h-[32px] md:h-[32px] min-w-[32px] md:min-w-[32px] rounded-full bg-white top-1 left-5 md:left-7 text-black text-[16px] md:text-[16px] flex justify-center items-center px-[2px] md:px-[5px] hover:bg-red-400 hover:text-black">
                                        {elm.icons}
                                    </Link>
                                ), [])
                            }
                        </div>

                    </div>
                </section>
                <section className={`flex flex-col items-center justify-between md:flex-col lg:flex-row pt-2 md:pt-10`}>
                    <section className="Quick-links">
                        <span className="text-white text-[18px] md:text-[18px]">Pages</span>
                        <ul className="flex flex-col gap-1 md:gap-2 mt-[20px]">
                            {
                                dataPages?.map((elm) => {
                                    return (
                                        <li key={elm.id} className="text-white text-[14px] md:text-[16px] hover:text-white/[0.5]">
                                            <Link href={`${elm.url}`} >
                                                {elm.link}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </section>
                <section className={`flex flex-col items-center justify-between md:flex-col lg:flex-row pt-2 md:pt-10`}>
                    <section className="Quick-links">
                        <span className="text-white text-[18px] md:text-[18px]">Quik links</span>
                        <ul className="flex flex-col gap-1 md:gap-2 mt-[20px]">
                            {
                                data?.map((elm) => {
                                    return (
                                        <li key={elm.id} className="text-white text-[14px] md:text-[16px] hover:text-white/[0.5]">
                                            <Link href={`${elm.url}`} >
                                                {elm.link}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </section>
                <section className="w-[90%] md:w-[30%] flex flex-col justify-between items-start pt-2 md:pt-10">
                    <div className="">
                        <p className="text-white text-[18px] md:text-[18px]">Contact Us</p>
                    </div>
                    <div className="text-white text-[16px] my-4">
                        <p className="flex items-center gap-2"><FaPhoneSquareAlt /> : +91 00000000</p>
                        <p className="flex items-center gap-2"><FaMailBulk /> : xyz@gmail.com</p>
                    </div>
                    <div className="text-white">
                        D5, Bharu Marg, Ashok Vihar, Nandpuri Colony, Malviya Nagar, Jaipur, Rajasthan 302017
                    </div>
                </section>
            </Wrapper>
            <hr className="decoration-white" />
            <div className="flex flex-col md:flex-row justify-around items-center gap-2 pt-5">
                <span className="text-white text-center">© 2023 kesha.com. All rights reserved || Developed & mantain by <span href='www.digitalwhopper.com'>Digital Whopper</span></span>
                <img src="/payment.webp" alt="" className="md:w-[520px]" />
            </div>
        </footer>
    )
};

export default Footer;
