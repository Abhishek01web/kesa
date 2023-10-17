import React, { useState } from 'react';
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import Wrapper from '@/components/wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';

import { IoMdHeartEmpty } from "react-icons/io";


import RelatedProducts from '@/components/RelatedProducts';

const product = () => {

  const rout = useRouter();
  const { slug } = rout.query;

  const [productSec, setProductSec] = useState(1);

  const handleShow = (no) => {
    setProductSec(no)
  }

  const DetailsSection = [
    {
      name: "Description"
    },
    {
      name: "Reviews"
    },
    {
      name: "shipping & Delivery"
    },
    {
      name: "Refund policy & Exchanges"
    },
    {
      name: "Ask Question"
    }
  ]

  const size = [6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <section className='w-full py-5 md:py-20 mt-[60px] md:mt-[100px]'>
      <Wrapper className={`w-[1600px]`}>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {slug}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center my-2">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{`99.00`}
              </p>
              <p className="text-base  font-medium line-through">
                &#8377;{`99.00`}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                10%
                off
              </p>
            </div>

            {/* product details */}
            <div className="text-md font-medium text-black my-4">
              <ul className='list-disc list-inside'>
                <li><span>Material : </span>{`925K Sterling Silve`}</li>
                <li><span>Total Weight: </span>{`7 – 8 gr (for 11 ring size)`}</li>
                <li><span>Ring Diameter : </span>{`0,76 cm (0.30 inch)`}</li>
                <li><span>Settings : </span>{`Settings`}</li>
                <li><span>Color: </span>{`Color`}</li>
              </ul>
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">

              {/* SIZE START */}
              <div>
                <select id="size" class="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-2.5  dark:bg-black dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected >Select Size</option>
                  {
                    size.map((size, i) => {
                      return (
                        <option value={size} key={i}>{size}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{`product discription : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem doloribus a assumenda maxime exercitationem ducimus repellat nulla qui illo. Possimus consectetur illo qui sunt fugiat exercitationem maxime ducimus iusto!`}</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        <hr className='w-full h-[2px] mx-auto mt-5 bg-gray-100 border-0 rounded md:mt-5 dark:bg-gray-700' />
        <section className='productData flex flex-col md:flex-row items-start md:items-center justify-around my-4'>
          {
            DetailsSection.map((item, i) => {
              return (
                <>
                  <span className='text-black text-[18px] font-oswald font-bold hover:underline cursor-pointer' onClick={() => handleShow(i)}>{item.name}</span>
                  <hr className='w-full h-[2px] mx-auto mt-5 bg-gray-100 border-0 rounded md:mt-5 dark:bg-gray-700 md:hidden' />
                </>
              )
            })
          }
        </section>

        <section className={productSec === 0 ? `decription h-[100%] w-[100%] p-5` : "hidden"}>
          <h1>
            {`Decription`}
          </h1>
          <p>{
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, assumenda eveniet. Recusandae quis reprehenderit odio a, fugit molestias vel soluta dignissimos iure ipsum est ducimus numquam earum repellendus. Minus, sint placeat, voluptate non pariatur perspiciatis suscipit at rerum quia aliquam culpa ex dicta voluptas eos possimus, impedit iusto similique laudantium molestiae. Quisquam accusantium sit tempore consectetur eaque dolorem quibusdam nesciunt. In sed earum maxime reprehenderit est praesentium beatae repellendus laboriosam corrupti doloribus? Sequi ullam, dolorem quidem blanditiis beatae non ipsam id officiis consequuntur quaerat? Facere minima sunt amet dicta totam quos molestias veritatis? Nisi atque fugit repudiandae eveniet. Corrupti in maiores odio libero dicta, impedit, autem dolore nemo deleniti ullam ut obcaecati accusamus excepturi, voluptates provident enim quo commodi. Nulla, exercitationem eos. Adipisci reiciendis cumque qui dolor pariatur soluta ut, enim quisquam ipsum consectetur rerum ratione aliquid tempora perspiciatis. Possimus vitae inventore, ipsa aut aperiam, dolores voluptas, iusto recusandae porro ratione distinctio! Illo aliquam consectetur reprehenderit modi! Eum rerum laborum quos cumque dolorem iste similique rem? Modi, quisquam. Modi nam illum voluptatum. Praesentium qui in, et tempora animi numquam vitae quaerat recusandae debitis delectus fuga, suscipit velit saepe reiciendis ipsa voluptatem consequuntur reprehenderit quisquam architecto vero? Quidem, adipisci. Cum laudantium nam temporibus autem facilis voluptatem laboriosam nobis, alias tenetur. Quos minima tempora rerum recusandae dolore architecto, expedita beatae repellendus accusantium, amet quis illo cumque voluptate, debitis molestias. Facilis sapiente aliquam, iure aspernatur ipsam id debitis expedita molestiae culpa, eius repellendus error! Repudiandae, libero! Corrupti molestias assumenda nam libero molestiae, vitae placeat cum eaque sunt totam, harum magnam commodi hic fugiat veniam eum doloribus. Assumenda, animi? Ducimus dolorum fuga deserunt reiciendis corporis unde sunt omnis nam adipisci ex! Esse quibusdam porro temporibus repellat sunt perferendis nisi cum enim voluptate consectetur sapiente alias iste, fugiat, totam animi assumenda eos dolore rem tempora quis non perspiciatis nulla. Nulla in, quia animi, pariatur natus odio doloribus fuga aut, sint sunt rerum. Similique laudantium voluptatibus ipsam sed assumenda sequi dignissimos reprehenderit at incidunt fugiat excepturi asperiores iste maxime odio facilis inventore qui in, doloribus perspiciatis quae vel error tenetur cumque. Tenetur labore, recusandae possimus eveniet nemo nulla, in ex, natus atque nesciunt dolore ea perferendis magnam. Totam quod repellendus vitae iusto assumenda! Illum tempore numquam ipsam reiciendis laboriosam eveniet commodi temporibus corporis consectetur? Eius facere laudantium delectus. Delectus id provident voluptatem suscipit, voluptatibus nesciunt, deleniti quod eaque ad ipsam natus in perferendis corrupti ut, officiis numquam labore eius consequatur beatae dolorum aut modi! Culpa itaque commodi dicta? Delectus blanditiis deserunt officiis inventore omnis, sit adipisci sequi, ullam maxime vel, quam quasi. Maxime necessitatibus tenetur non quidem autem similique optio mollitia possimus, doloribus cumque dicta corrupti atque nobis quasi sint dignissimos delectus odit accusantium reprehenderit? Consequuntur consequatur blanditiis recusandae odit sapiente dolor, ipsam modi nihil dolore, sint perferendis suscipit illum molestiae delectus minima error tempore libero. Accusantium reprehenderit quibusdam temporibus inventore. Iusto ipsa cumque sed reprehenderit at quam laudantium. Atque blanditiis ut, qui dolor deserunt perferendis autem officiis neque pariatur obcaecati alias eaque et illo magnam.
            `
          }
          </p>
        </section>

        <section className={productSec === 1 ? 'Reviews flex flex-col md:flex-row items-center justify-around' : "hidden"}>
          <section className='userReviews'>
            <figure className="max-w-screen-md mx-auto text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-2xl italic font-medium text-black dark:text-black">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-black dark:text-black">Micheal Gough</cite>
                  <cite className="pl-3 text-sm text-black dark:text-black">CEO at Google</cite>
                </div>
              </figcaption>
            </figure>
          </section>
          {/* reviwe form */}

          <section className='review form'>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl mb-4 text-black font-semibold">Have a Review?</h4>
                <form id="feedbackForm" action method>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" " style={{ transition: 'all 0.15s ease 0s' }} required />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">Review</label><textarea maxLength={300} name="feedback" id="feedback" rows={4} cols={80} className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full" placeholder required defaultValue={""} />
                  </div>
                  <div className="text-center mt-6">
                    <button id="feedbackBtn" className="bg-black text-white text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" style={{ transition: 'all 0.15s ease 0s' }}>Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>

        <section className={productSec === 2 ? 'shipping flex items-center justify-around' : "hidden"}>
          <ul className='list-disc list-inside'>
            <li>We provide worldwide free shipping</li>
            <li>We do not provide any service to India, China, and Brazil because of border regulation</li>
            <li>Most orders require 24 to 48 hours for dispatch</li>
            <li>The customer may check the delivery status on Bysilverstone&gt;My Account section</li>
            <li>Our shipping partners are DHL, FedEx, TNT, and UPS</li>
            <li>The customer also may check the delivery status on the shipping company's website with the tracking number</li>
            <li>U.S.A &amp; Canada - The shipping process can take 3 - 5 business days after dispatch</li>
            <li>Europe &amp; United Kingdom - The shipping process can take 1 - 3 business days after dispatch</li>
            <li>Rest of World - - The shipping process can take 5 - 7 business days after dispatch</li>
            <li>Due to additional quarantine measures, the shipping processes can take longer than expected.</li>
            <li>There is no shipment made from Bysilverstone at the weekends</li>
            <li>Bysilverstone makes all shipments fully insured at no extra cost to customers.</li
            ><li>If the shipping company fails to deliver, the customers do not suffer from any loss.</li>
            <li>The customer accepting the delivery should not accept deliveries where the box or packaging has been damaged or if the box is empty.</li>
            <li>BySilverstone will not be responsible for lost and stolen packages or any damages to the package after being left at the customer's address by the shipping agency.</li>
            <li>Click Return or Refund Policy</li></ul>

        </section>

        <section className={productSec === 3 ? 'Refund' : "hidden"}>
          <p>
            If for any reason you are not completely satisfied with your purchase, we gladly accept your return request within 14 days of purchase but also we provide cancellation of the order if the customers request within one hour of purchase
          </p>

          <ul className='list-disc list-inside my-6'>
            <li>
              The customers have to contact us within the first 14 days of purchase and have to declare the reason for the return
            </li>
            <li>
              The products have to be unused and in the original condition for returns
            </li>
            <li>
              The products have to be sent in original package
            </li>
            <li>
              The customers are responsible to pay the shipping fees for returns.
            </li>
            <li>
              When we receive a returned product in declared conditions, we make a full refund on the same day.
            </li>
            <li>
              The funds are being credited to your original payment method.
            </li>
            <li>
              The refunding process with Paypal is credited in 1 business day.
            </li>
            <li>
              The refunding process with the credit card is credited in between 3-10 business days.
            </li>
          </ul>

          <p className='m-2'>
            We do not accept exchanges. If the customer completely wants to exchange, customers can request a refund and make another purchase when the process is completed.
          </p>
          <p className='m-2'>
            Due to additional quarantine measures, we can apply extra days for the returning process. The customers have to inform us.
            We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
          </p>
          <p className='m-2'>
            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
          </p>
          <p className='m-2'>
            To start a return, you can contact us at customer@.com. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
          </p>
          <p className='m-2'>
            You can always contact us for any return questions at customer@kesha.com.
          </p>

          <div className='m-2'>
            <p>
              Damages and issues
            </p>
            Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right.
          </div>

          <div className='m-2'>
            <p>
              Exceptions / non-returnable items
            </p>
            Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.
          </div>
          <p className='m-2'>
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </p>

          <div className='m-2'>
            <h1>
              Exchanges
            </h1>
            The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
          </div>

          <div className='m-2'>
            <h1>
              Refunds
            </h1>
            We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
          </div>

          <span>
            customer@kesha.com
          </span>
        </section>

        <section className={productSec === 4 ? 'Question' : "hidden"}>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black dark:text-black">Subject</label>
              <input type="email" id="subject" className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-black">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300  dark:bg-white dark:border-black dark:placeholder-black dark:text-black" placeholder="Leave a comment..." defaultValue={""} />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit focus:ring-4 focus:outline-none ">Send message</button>
          </form>
        </section>
        <RelatedProducts />
      </Wrapper>
    </section>
  )
}

export default product;


