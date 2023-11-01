import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
    return (
        <Link
            href={`/product/Anubis and Ankh Necklace`}
            className="transform overflow-hidden bg-white duration-200 rounded-md hover:scale-105 cursor-pointer md:p-4"
        >
            <Image
                width={500}
                height={500}
                src={`/product.jpg`}
                alt={`hero-1.jpg`}
                className="rounded-md md:h-[320px] md:w-[360px]"
            />
            <div className="text-black/[0.9] md:mt-2">
                <h2 className="text-[14px] md:text-lg font-medium">Anubis and Ankh Necklace</h2>
                <div className="flex items-start text-black/[0.5]">
                    <div>
                        <p className="mr-2 text-[14px] md:text-lg font-semibold">
                            {/* &#8377;{p.price} */}
                            &#8377;89.00
                        </p>
                        <p className="text-[16px] md:text-lg font-medium line-through">
                            {/* &#8377;{p.orignal_price} */}
                            &#8377;99.00
                        </p>
                    </div>
                    <p className="ml-auto text-[14px] md:text-lg font-medium text-green-500">
                        10.00
                        % off
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
