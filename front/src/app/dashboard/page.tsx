"use client";

import usePrivate from "@/hooks/usePrivate";
import style from "./Dashboard.module.css";
import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/interfaces/IOrder";


const Dashboard = () => {
    const { user } = useAuth();
    
    usePrivate()
    
    return (
        <>
        <div className={style.textColor}>

        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard</p>
        </div>
        <div className={style.containerUser}>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Address: {user?.address}</p>
            <p>Phone: {user?.phone}</p>

        </div>
        <div className={style.containerOrders}>
        {user?.orders.length ? user?.orders.map((order: IOrder) => (
         <div key={order.id}>
         <div>You have an order</div> 
         <p>Order ID: {order.id}</p>
         <p>Order Date: {order.date}</p>
         <p>Order Status: {order.status}</p>
         </div>

        ))
         : (
         <div>You have no orders</div>
        )}
         
       
        </div>
        </div>
        </>
    )
}

export default Dashboard;