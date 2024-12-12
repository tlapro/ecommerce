"use client";

import { IOrder } from "@/interfaces/IOrder";

export const CartPage = ({ order }: { order: IOrder[] }) => {


    


    return (    
        <div>
            {order.map((order) => {
                return (
                    <div key={order.id}>
                        <p>{order.date}</p>
                        <p>{order.status}</p>
                    </div>
                )
            }
            )}
            <div>

            </div>

        </div>
    )
}
export default CartPage;