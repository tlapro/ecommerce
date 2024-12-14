import { getProductById } from "@/helpers/getOneProduct";
import style from "./ProductDetail.module.css";;
import Carrousel from "@/components/carrousel/Carrousel";
import Details from "@/components/productDetail/Details";

export const ProductDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;
    const { id, name, price, description, image, stock, categoryId } = await getProductById(Number(slug));
    return (
        
        <div className="w-full h-full flex items-center justify-center flex-col px-4">
            <div className={style.containerTitle}>
                <h1>Product Detail</h1>
            </div>
            <Details 
            id={id}
            name={name}
            price={price}
            description={description}
            image={image}
            stock={stock}
            categoryId={categoryId}
            />
            <div>
                < Carrousel id={id} />
            </div>
        </div>
    );
};

export default ProductDetail;
