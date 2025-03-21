import { getProductById } from "@/helpers/getOneProduct";
import style from "./ProductDetail.module.css";
import Carrousel from "@/components/carrousel/Carrousel";
import Details from "@/components/productDetail/Details";


export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; 

    const productId = Number(slug);
    if (isNaN(productId)) {
        throw new Error("Invalid slug provided.");
    }

    const { id, name, price, description, image, stock, categoryId } = await getProductById(productId);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-6">
            <div className={`${style.containerTitle} text-center mb-8`}>
                <h1 className="text-3xl font-bold">Product Detail</h1>
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
            <div className="w-full mt-10">
                <Carrousel id={id} />
            </div>
        </div>
    );
};

