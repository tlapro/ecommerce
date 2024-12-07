

export const ProductDetail = async ({ params,
    } : {
    params: Promise<{ slug: string}>;
    } ) => {
    // params es una PROMSESA que se resuelve COMO UN OBJETO y que tiene una propiedad SLUG
    const { slug } = await params;
    return (
        <div>
            <h1 className="text-4xl flex justify-center mt-24">Product Detail Page | ID: {slug}</h1>
        </div>
    )
}
export default ProductDetail;