/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useCart } from "@/context/CartContext";
import style from "./CartPage.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toast } from "@/components/toast/Toast";
import { useRouter } from "next/navigation";
import { IProduct } from "@/interfaces/IProduct";
import { IoTrashOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

export const CartPage = () => {
    const { items, clearCart, removeFromCart } = useCart();
    const [totalValue, setTotalValue] = useState(0);
    const { user } = useAuth()
    const router = useRouter();

    useEffect (() => {
        if (items && items.length > 0) {
            const total = items.reduce((acc: number, curr: IProduct) => acc + curr.price, 0);
            setTotalValue(total);
        } else {
            Toast.fire({icon: 'error',title: "Your cart is empty"});
            router.push("/home");
        }
    }, [items]);

    const handleSubmit = () => {
      if (!user) {
        Toast.fire({icon: 'error',title: "You must be logged to sumbit an order" });
        router.replace("/auth/login");
      }
    }

    const handleClear = () => {
        clearCart();
        router.push("/home");
    };

    return items && items.length > 0 ? (
        <div className={style.container}>
          <h1 className={style.title}>Your Cart</h1>
          <hr className={style.separator} />
          <div className={style.cartList}>
            {items.map((product: IProduct) => (
            <div key={product.id}>
              <div className={style.cartItem}>
                <div className={style.leftItems}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className={style.productImage}
                  />
                  <h2 className={style.productName}>{product.name}</h2>
                </div>
                <div className={style.rightItems}>
                  <p className={style.quantity}>Quantity: 1</p>
                  <p className={style.price}>Price: ${product.price}</p>
                  <button className={style.trashButton} onClick={() => {
                    removeFromCart(product.id);
                    Toast.fire({icon: 'success',title: `${product.name} removed from cart`});
                  }}><IoTrashOutline size={25}/></button>                 
                </div>
                
              </div>
              <hr className={style.separator} />
              </div>
            ))}
          </div>
          <div className={style.totalContainer}>
            <h2>Total: ${totalValue}</h2>
            <button className={style.button} onClick={() => handleSubmit()}>Submit Order</button>
            <button onClick={() => handleClear()} className={style.button}>Delete Order</button>
          </div>
        </div>
      ) : (
        <div className={style.containerEmpty}>
          <h1 className={style.titleEmpty}>Your Cart is empty</h1>
        </div>
      )
    };
export default CartPage;