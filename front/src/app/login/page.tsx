/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./Login.module.css";
import { use, useEffect, useState } from "react";
import LoginProps, { ILogin } from "@/interfaces/ILogin";
import { validateField } from "@/helpers/loginValidate";

export const Login = ({ token, setToken }: LoginProps) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [form, setForm] = useState<ILogin>({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    }); 
 
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });

        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        const error = validateField(name, value, form);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3001/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((json => {
    console.log(json.token)
    setToken(json.token)
    console.log(token)
    localStorage.setItem("userToken", json.token)
    }))
    .catch((error) => console.log(error));
 }

    return (
        <div>
         
            <div className={style.containerTitle}>
            <h1 className="titleContent">My Apple Store</h1>
            </div>
            <div>
                <div className={style.loginContainer}>
                    <form onSubmit={handleSumbit} className={style.loginForm} action="">
                        <h1 className={`text-4xl font-bold text-center cursor-default mt-3 ${style.title}`}>Login</h1>
                        <hr className={style.line} />
                        <div className={style.loginReq}>
                            <label htmlFor="email">Email</label>
                            <input 
                            onChange={handleChange} 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="Enter your email" 
                            value={userData.email}/>
                            {errors.email && <span className={style.errorText}>{errors.email}</span>}
                        </div>

                        <div className={style.loginReq}>
                            <label htmlFor="password">Password</label>
                            <input 
                            onChange={handleChange} 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            placeholder="Enter your password" 
                            value={userData.password}/>
                            {errors.password && <span className={style.errorText}>{errors.password}</span>}
                        </div>

                        <button className={style.loginButton} type="submit">Login</button>

                        <Link className={style.registerLink} href="/register">
                            Dont have an account? Register here.
                        </Link>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Login;