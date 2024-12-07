/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./Register.module.css";
import { IRegister } from "@/interfaces/IRegister";
import { useState } from "react";
import { registerValidate } from "@/helpers/registerValidate";

export const Register = () => {

    const [form, setForm] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    }); 
 
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setForm((prevState: IRegister) => ({
            ...prevState,
            [name]: value,
        }));
        const error = registerValidate(name, value, form);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: error,
            }));
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        alert("Registered");
    }

    return (
        <div>
         
            <div>
                <div className={style.containerTitle}>
                <h1 className="titleContent">My Apple Store</h1>
                </div>
                <div className={style.registerContainer}>
                    <form className={style.registerForm} action="">
                        <h1 className={`text-4xl font-bold text-center cursor-default mt-3 ${style.title}`}>Register</h1>
                        <hr className={style.line} />
                        <div className={style.registerReq}>
                        <label htmlFor="password">Name</label>
                        <input onChange={handleChange} type="text" id="name" name="name" placeholder="Enter your name"/>
                        {errors.name && <span className={style.errorText}>{errors.name}</span>}
                        </div>

                        <div className={style.registerReq}>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} type="email" id="email" name="email" placeholder="Enter your email"/>
                        {errors.email && <span className={style.errorText}>{errors.email}</span>}
                        </div>
                        
                        <div className={style.registerReq}>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter your password"/>
                        </div>
                        {errors.password && <span className={style.errorText}>{errors.password}</span>}

                        <div className={style.registerReq}>
                        <label htmlFor="password">Adress</label>
                        <input onChange={handleChange} type="text" id="adress" name="adress" placeholder="Enter your address"/>
                        {errors.address && <span className={style.errorText}>{errors.address}</span>}
                        </div>
                        
                        <div className={style.registerReq}>
                        <label htmlFor="password">Phone Number</label>
                        <input onChange={handleChange} type="number" id="phone" name="adress" placeholder="Enter your phone number"/>
                        {errors.phone && <span className={style.errorText}>{errors.phone}</span>}
                        </div>
                        
                    <button className={style.registerButton} onClick={handleSumbit} type="submit">Register</button>
                    <Link className={style.registerLink} href="/login">
                        Already have an account? Login here
                    </Link>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Register;