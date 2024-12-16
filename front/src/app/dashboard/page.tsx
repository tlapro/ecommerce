"use client";

import usePrivate from "@/hooks/usePrivate";
import style from "./Dashboard.module.css";
import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/interfaces/IOrder";
import { useEffect, useState } from "react";
import Image from "next/image";

const Dashboard = () => {
  const { getOrders } = useAuth(); 
  const { user } = useAuth(); 
  const [orders, setOrders] = useState<IOrder[]>([]);


  useEffect(() => {
    const fetchOrders = async () => {
      const detailedOrders = await getOrders();
      if (detailedOrders) {
        setOrders(detailedOrders); 
      }
    };

    fetchOrders();
  }, []);

  usePrivate(); 
  return (
    <div className={style.container}>
      <div className={style.containerDashboard}>
        <h1 className={style.title}>Dashboard</h1>
        <p className={style.welcome}>Welcome to your dashboard {user?.name}</p>
      </div>
      <div className={style.containerUser}>
        <h1 className={style.titleSmall}>User Info</h1>
        <hr className={style.line} />
        <div className="text-xl">
        <p>Name | {user?.name}</p>
        <p>Email | {user?.email}</p>
        <p>Address | {user?.address}</p>
        <p>Phone | {user?.phone}</p>
        </div>
      </div>
      <div className={style.containerOrders}>
        <h2 className={style.titleSmall}>Your Orders</h2>
        <hr className={style.line} />
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <p className={style.orderId}>Order ID: {order.id}</p>
              <div className={style.orderCard}>
              <div>
              <p>Order Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Order Status: {order.status}</p>
              </div>
              <div className={style.products}>
                {order.products.map((product) => (
                  <div key={product.id} className={style.productCard}>
                    <div>
                    <p>{product.name}</p>
                    <p>Price: ${product.price}</p>
                    </div>
                    <Image className={style.image} src={product.image} alt={product.name} width={50} height={50} />
                  </div>
                  
                ))}
                </div>
              </div>
              <hr className={style.line} />
            </div>
          ))
        ) : (
          <p>You have no orders</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
