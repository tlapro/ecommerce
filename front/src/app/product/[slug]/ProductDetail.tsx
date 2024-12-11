import { getProductById } from "@/helpers/getOneProduct";
import style from "./ProductDetail.module.css";
import Image from "next/image";

export const ProductDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const { id, name, price, description, image, stock, categoryId } = await getProductById(Number(slug));
    
    return (
        
        <div className="w-full h-full flex items-center justify-center flex-col px-4">
            <div className={style.containerTitle}>
            <h1>Product Detail</h1>
            </div>
            <div className="w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 shadow-black rounded-lg p-10 bg-bgcolor"
             style={{
                boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.5)' 
             }}>

                <div className="flex flex-col items-center justify-start">
                    <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6 text-center ">{name}</h1>

                    <div className="w-full flex justify-center items-center">
                        <Image src={image} alt={name} width={300} height={300} className="object-cover rounded-lg"
                        style={{ 
                            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 1))'}} />
                    </div>
                </div>


                <div className="flex flex-col justify-start space-y-6">
                    <h2 className="text-2xl font-semibold text-primary text-center">Description</h2>
                    <p className="text-lg text-foreground text-justify">{description}</p>
                <div className="grid grid-rows-2 gap-4 mt-10">
                <div>

                </div>
                 <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-xl font-semibold text-green-500 text-center">${price}</h2>
                    <button className="w-full md:w-auto bg-secondary hover:bg-hoverSecondary text-white py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>   
        
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
