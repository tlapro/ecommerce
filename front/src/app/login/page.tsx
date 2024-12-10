/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./Login.module.css";
import { use, useContext, useEffect, useState } from "react";
import { validateField } from "@/helpers/loginValidate";
import { UsersContext } from "@/context/UsersContext";


export const Login = () => {

    const { loginUser, token } = useContext(UsersContext);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (loginUser) {
          await loginUser(userData);
          window.location.href = '/';
        }
      };

    return (
        <div>
         
            <div className={style.containerTitle}>
            <h1 className="titleContent">My Apple Store</h1>
            </div>
            <div>
                <div className={style.loginContainer}>
                    <form onSubmit={handleSubmit} className={style.loginForm} action="">
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