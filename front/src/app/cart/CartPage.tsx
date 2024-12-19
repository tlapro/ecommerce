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
import ToastConditional from "@/components/toastConditional/ToastConditional";

export const CartPage = () => {
  const { user } = useAuth()
  const router = useRouter();
  const { items, clearCart, removeFromCart, postOrder } = useCart();
  const [totalValue, setTotalValue] = useState(0);
  
  const [quantityMap, setQuantityMap] = useState<{ [key: string]: number }>(() => {
    const initialQuantities: { [key: string]: number } = {};
    items?.forEach(item => {
        initialQuantities[item.id] = 1;
    });
    return initialQuantities;
  });

  useEffect(() => {
    if (items && items.length > 0) {
      const total = items.reduce((acc: number, curr: IProduct) => acc + curr.price * (quantityMap[curr.id] || 1), 0);
      setTotalValue(total);
    }
  }, [items, quantityMap]);

  const handleSubmit = async () => {
    const result = await ToastConditional(
      '¿Estás seguro?',             
      'Vas a confirmar el pedido.', 
      'Sí, confirmar',                 
      'Cancelar'                   
    );
    
    if (result.isConfirmed) {
      if (!user) {
        Toast.fire({ icon: 'error', title: "You must be logged to submit an order" });
        router.replace("/auth/login");
      } else {
        await postOrder();
        router.replace("/dashboard");
      }
    }
  }

  const handleClear = async () => {
    const result = await ToastConditional(
      '¿Estás seguro?',             
      'Esto vaciará tu carrito. Esta acción no se puede deshacer.', 
      'Sí, vaciar',                 
      'Cancelar'                   
    );
    
    if (result.isConfirmed) {
      clearCart();
      router.push('/home');
    }
  };

  // Aumentar la cantidad en el estado local
  const handleIncrement = (id: number) => {
    setQuantityMap(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 1) + 1 // Incrementar cantidad local
    }));
  };

  // Disminuir la cantidad en el estado local
  const handleDecrement = (id: number) => {
    setQuantityMap(prevState => ({
      ...prevState,
      [id]: Math.max(1, (prevState[id] || 1) - 1) // No permitir que la cantidad sea menor a 1
    }));
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
                
                <p className={style.quantity}>Quantity: {quantityMap[product.id] || 1}</p>
                <div className={style.quantityContainer}>
                  <button
                    className={style.quantityButton}
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                  <button
                    className={style.quantityButton}
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                </div>
                <p className={style.price}>Price: ${product.price}</p>
                <button
                  className={style.trashButton}
                  onClick={() => {
                    removeFromCart(product.id);
                    Toast.fire({ icon: 'success', title: `${product.name} removed from cart` });
                  }}
                >
                  <IoTrashOutline size={25} />
                </button>                 
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
  );
};

export default CartPage;
