/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./Login.module.css";
import { useState } from "react";
import { ILogin } from "@/interfaces/ILogin";
import { validateField } from "@/helpers/loginValidate";

export const Login = () => {
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
        alert("Logged");
    }

    return (
        <div>
         
            <div className={style.containerTitle}>
            <h1 className="titleContent">My Apple Store</h1>
            </div>
            <div>
                <div className={style.loginContainer}>
                    <form className={style.loginForm} action="">
                    <h1 className={`text-4xl font-bold text-center cursor-default mt-3 ${style.title}`}>Login</h1>
                    <hr className={style.line} />
                    <div className={style.loginReq}>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="email" id="email" name="email" placeholder="Enter your email"/>
                    {errors.email && <span className={style.errorText}>{errors.email}</span>}
                    </div>
                    <div className={style.loginReq}>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter your password"/>
                    {errors.password && <span className={style.errorText}>{errors.password}</span>}
                    </div>
                    <button className={style.loginButton} onClick={handleSumbit} type="submit">Login</button>

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