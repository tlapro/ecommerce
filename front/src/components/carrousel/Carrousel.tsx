"use client"

import { getProducts } from '@/helpers/getProducts';
import style from './Carrousel.module.css';
import Card from '@/components/card/Card';
import { IProduct } from '@/interfaces/IProduct';
import { useEffect, useState } from 'react';

export const Carrousel = ({ id } : { id: number }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const fetchProduct = async (id :number) => {
            const fetchData = await getProducts();
            const filteredProducts = fetchData.filter(product => product.id !== id);
            setProducts(filteredProducts);
        };
        
        fetchProduct(id);
    }, [id]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(1);
            } else if (window.innerWidth <= 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, products.length - itemsToShow));
    };

    if (products.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className={style.carrouselWrapper}>
            <div className={style.containerTitle}>
                <h2>Other Products</h2>
            </div>

            <div className={style.carrouselContainerWrapper}>
                <button className={style.navButton} onClick={handlePrev} disabled={startIndex === 0}>
                    &#8249;
                </button>

                <div className={style.carrouselContainer}>
                    {products.slice(startIndex, startIndex + itemsToShow).map(({ id, name, price, description, image, stock }) => (
                        <div key={id} className={style.carrouselItem}>
                            <Card
                                id={id}
                                name={name}
                                price={price}
                                description={description}
                                image={image}
                                stock={stock}
                            />
                        </div>
                    ))}
                </div>

                <button className={style.navButton} onClick={handleNext} disabled={startIndex + itemsToShow >= products.length}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
