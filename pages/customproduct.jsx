import React from 'react'

const customproduct = () => {

  return (
    // style={{backgroundImage: "url('/costomize-bg.avif')"}}
    <section className='h-[100vh] w-full mt-[120px] bg-cover bg-center bg-no-repeat'>
      <section className='heading flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-4xl font-oswald leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-black text-center'>Create your own unique style of jewellery</h1>
        <p className='text-center'>Tell us about how you'd like to create your jewellery</p>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-black" />
      </section>
      <section className='flex items-center justify-center'>
        <form className='w-[90%] md:w-[40%] flex flex-col items-center justify-center gap-10'>
          <select id="jewellery-type" className="text-black text-sm block w-full p-5 dark:bg-white dark:placeholder-black dark:text-black bg-white rounded-lg border shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300">
            <option selected>Choose jewellery type</option>
            <option value="Necklace">Necklace</option>
            <option value="Pendant">Pendant</option>
            <option value="Earrings">Earrings</option>
            <option value="Bangles">Bangles</option>
            <option value="Rings">Rings</option>
          </select>

          <select id="jewellery-type" className="text-black text-sm block w-full p-5 dark:bg-white dark:placeholder-black dark:text-black bg-white rounded-lg border shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300">
            <option selected>Choose Gemstone type</option>
            <option value="Precious colour stone">Precious colour stone</option>
            <option value="Semi-precious stone">Semi-precious stone</option>
            <option value="Diamonds">Diamonds</option>
            <option value="Rose-cut diamonds">Rose-cut diamonds</option>
          </select>

          <select id="jewellery-type" className="text-black text-sm block w-full p-5 dark:bg-white dark:placeholder-black dark:text-black bg-white rounded-lg border shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300">
            <option selected>Choose Occasion type</option>
            <option value="Wedding">Wedding</option>
            <option value="Daily wear">Daily wear</option>
            <option value="Party wear">Party wear</option>
            <option value="Festive">Festive</option>
          </select>

          <textarea id="description" rows="4" class="text-black text-sm block w-full p-5 dark:bg-white dark:placeholder-black dark:text-black bg-white rounded-lg border shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300" placeholder="Description here..."></textarea>

          <button class="bg-black text-white font-oswald py-2 px-4 border rounded-lg uppercase text-2xl block p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white hover:text-black transition duration-300">
            Send
          </button>
        </form>
      </section>
    </section>
  )
}

export default customproduct;