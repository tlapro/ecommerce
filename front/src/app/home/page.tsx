/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */

import style from "./Home.module.css";
import Card from "@/components/card/Card";
import { fetchProducts } from "@/helpers/getProducts";
import { IProduct } from "@/interfaces/IProduct";


export const Home = async () => {
    const fetchData: IProduct[] = await fetchProducts();

    return (
        <div>
         
            <div className={style.containerTitle}>
            <h1 className="titleContent">The Best Apple Products</h1>
            </div>
            <div className={style.cardsContainer}>
                {fetchData.map(({id, name, price, description, image, stock}) => {
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