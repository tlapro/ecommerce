import { fetchProductById } from "@/helpers/getOneProduct";
import Image from "next/image";


export const ProductDetail = async ({ params,
    } : {
    params: Promise<{ slug: string}>;
    } ) => {
    
    // params es una PROMSESA que se resuelve COMO UN OBJETO y que tiene una propiedad SLUG
    const { slug } = await params;
    const {id, name, price, description, image, stock, categoryId} = await fetchProductById(parseInt(slug));
    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | ID: {id}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | name: {name}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | price: {price}</h1>
            <h1 className="flex justify-center mt-24">Product Detail Page | description: {description}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | image: {image}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | stock: {stock}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | categoryId: {categoryId}</h1>
        <div className="mt-20 w-[20%] md:w-[10%] flex justify-center items-center relative" >
        <Image src={image} alt="product" width={300} height={300} />
            <div className="absolute top-full -right-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to cart</button>
            </div>
        </div>
        </div>
    )
}
export default ProductDetail;