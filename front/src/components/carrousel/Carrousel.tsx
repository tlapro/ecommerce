import { getProducts } from '@/helpers/getProducts';
import style from './Carrousel.module.css';
import Card from '@/components/card/Card';

export const Carrousel = async () => {
    const products = await getProducts();

    return (
        <div>
            <div className={style.containerTitle}>
                <h2>Product Carousel</h2>
            </div>
            <div className={style.carrouselContainer}>
                {products.map(({ id, name, price, description, image, stock }) => (
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
            
        </div>
    );
};

export default Carrousel;
