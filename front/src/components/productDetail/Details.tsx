/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"

import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/IProduct";
import style from "./Details.module.css";
import Image from "next/image";


export default function Details({ id, name, price, description, image, stock, categoryId }: IProduct) {
    const { addToCart } = useCart();


    const product = { id, name, price, description, image, stock, categoryId };
    const handleOnClick = () => {
        addToCart(product);
    };


    return (
        <>
            <div
                className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12 rounded-lg bg-background-color shadow-md"
                style={{
                    boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-titleColor mb-6 text-center">
                        {name}
                    </h1>
                    <div className="w-full flex justify-center">
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={400}
                            className="object-cover rounded-lg"
                            style={{
                                filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 1))'
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-6">
                    <h2 className="text-xl lg:text-2xl font-semibold text-titleColor text-center">
                        Description
                    </h2>
                    <p className="text-base lg:text-lg text-foreground text-justify">
                        {description}
                    </p>
                    <div className="mt-6 flex flex-col items-center lg:items-start space-y-4">
                        <h2 className={style.text}>
                            ${price}
                        </h2>
                        <button
                            onClick={handleOnClick}
                            className={`w-full lg:w-auto text-white py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${style.buttonCart}`}
                        >   
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
