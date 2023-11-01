import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'

const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
    // Add more products as needed
];

const SearchPage = ({ setShowSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };
    return (
        <div className="h-[100vh] w-[100%] mx-auto p-4 fixed top-0 z-[9999] bg-white">
            <AiFillCloseCircle className='text-[22px] md:text-[32px] cursor-pointer absolute left-[95%]' onClick={() => setShowSearch(false)} />
            <div className="flex items-center justify-center my-4">
                <input
                    className="border border-gray-300 rounded-l py-2 px-4 w-1/2"
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="bg-black text-white font-bold py-2 px-4 rounded-r">
                    Search
                </button>
            </div>
            <div>
                {searchResults.length > 0 ? (
                    <ul className="">
                        {searchResults.map((product, i) => (
                            <Link
                                href={`/product/${product.name}`} key={i}
                            >
                                <li className="py-2 md:py-4 flex items-center justify-center" onClick={() => setShowSearch(false)}>
                                    <div className="flex w-[100%] md:w-[50%] md:py-5 gap-3 md:gap-5 border-b">
                                        {/* IMAGE START */}
                                        <div className="w-[50px] md:w-[120px]">
                                            <Image
                                                src={`/product.jpg`}
                                                alt={'sub'}
                                                width={120}
                                                height={120}
                                            />
                                        </div>
                                        {/* IMAGE END */}

                                        <div className="w-full flex flex-col">
                                            <div className="">
                                                {/* flex flex-col md:flex-row justify-between */}
                                                {/* PRODUCT TITLE */}
                                                <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                                                    {`Product Name`}
                                                </div>

                                                {/* PRODUCT PRICE */}
                                                <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                                                    MRP : &#8377;99.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500 my-4">No products found</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
