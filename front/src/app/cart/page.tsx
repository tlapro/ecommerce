import getOrders from "@/helpers/getOrders";
import CartPage from "./CartPage";

export const Cart = () => {    
    
    const order = getOrders();

    return (
        <div>
            <CartPage order={order} />
        </div>
    )
}
export default Cart;