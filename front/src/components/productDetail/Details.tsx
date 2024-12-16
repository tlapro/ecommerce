"use client"
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image"
import style from "./Details.module.css";
import { Toast } from "../toast/Toast";

export default function Details ({id, name, price, description, image, stock, categoryId} : IProduct) {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();

    const product = {id, name, price, description, image, stock, categoryId};
    const handleOnClick = () => {
        // if (!isAuthenticated) {
        //     Toast.fire({icon: 'error',title: "You must be logged in to add products to your cart"});
        //     return;
        // }
        const wasAdded = addToCart(product);
        if (wasAdded) {
            Toast.fire({icon: 'success', title: `${name} added to cart`});
        } else {
            Toast.fire({icon: 'error', title: `${name} is already in your cart`});
        }
    };

    return (
        <>
        <div className={`w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-10 mt-2 rounded-lg p-10 bg-background-color ${style.container}`}
        style={{
            boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.2)' 
        }}>
        
        <div className="flex flex-col items-center justify-start">
        <h1 className="text-3xl md:text-4xl font-semibold text-titleColor mb-6 text-center">{name}</h1>
        
        <div className="w-full flex justify-center items-center">
        <Image src={image} alt={name} width={300} height={300} className="object-cover rounded-lg"
        style={{ 
            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 1))'}} />
            </div>
            </div>
            
            
            <div className="flex flex-col justify-start space-y-6">
            <h2 className="text-2xl font-semibold text-titleColor text-center">Description</h2>
            <p className="text-lg text-foreground text-justify">{description}</p>
            <div className="grid grid-rows-2 gap-4 mt-10">
            
            <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-semibold text-green-500 text-center">${price}</h2>
            <button onClick={() => {handleOnClick()}} className={`w-full md:w-auto text-white py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ${style.buttonCart}`}>
            Add to Cart
            </button>
            </div>   
            
            </div>
            </div>
            </div>
            </>
        )
    }