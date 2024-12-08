import { fetchProductById } from "@/helpers/getOneProduct";


export const ProductDetail = async ({ params,
    } : {
    params: Promise<{ slug: string}>;
    } ) => {
    
    // params es una PROMSESA que se resuelve COMO UN OBJETO y que tiene una propiedad SLUG
    const { slug } = await params;
    const {id, name, price, description, image, stock, categoryId} = await fetchProductById(parseInt(slug));
    return (
        <div>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | ID: {id}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | name: {name}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | price: {price}</h1>
            <h1 className="flex justify-center mt-24">Product Detail Page | description: {description}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | image: {image}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | stock: {stock}</h1>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | categoryId: {categoryId}</h1>
        </div>
    )
}
export default ProductDetail;