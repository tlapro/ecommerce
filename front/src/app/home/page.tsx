/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct } from "@/interfaces/IProduct";
import RenderHome from "./RenderHome";
import { getProducts } from "@/helpers/getProducts";


export default async function Home () {
        const fetchData: IProduct[] = await getProducts();
    return (
        <div>
            < RenderHome fetchData={fetchData} />
        </div>
    )
}
