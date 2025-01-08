/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./Card.module.css";
import Image from "next/image";
interface CardProps {
        name: string,
        price: number,
        description: string,
        image: string,
        stock: number,
        id: number
}       
export default function Card({ name, price, image, id }: CardProps) {
    
;
    return (
        <div className={style.container}>
            <div className={style.card}>
                <h2>{name}</h2>
                <div className={style.imgContainer}>
                <Image width={200} height={200} className={style.imgProduct} src={image} alt="product"/>
                </div>
                <span className={style.price}>${price}</span>
                <Link key={id} href={`/product/${id}`}>
                <button className={style.buttonDetail}>Details</button>
                </Link>
            </div>
        </div>
    )
}