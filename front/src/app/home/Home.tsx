/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import style from "./Home.module.css";
import Card from "@/components/card/Card";
import { getProducts } from "@/helpers/getProducts";
import { IProduct } from "@/interfaces/IProduct";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Home = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts()
        .then((res: IProduct[]) =>  {
            setProducts(res);
        })
        .catch((e) => {
            alert("Error al obtener los productos")
        }
    )}, []);
    return (
        <div>
         
            <div className={style.containerTitle}>
            <h1 className="titleContent">The Best Apple Products</h1>
            </div>
            <div className={style.cardsContainer}>
                {products.map(({id, name, price, description, image, stock}) => {
                    return (

                    <Card 
                    key={id}
                    name={name} 
                    price={price} 
                    description={description} 
                    image={image} 
                    stock={stock}
                    id={id}
                    />

                    );
                })}
            </div>
        </div>
    )
}

export default Home;