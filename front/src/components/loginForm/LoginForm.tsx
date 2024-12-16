/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./LoginForm.module.css"
import { useState } from "react";
import { validateField } from "@/helpers/loginValidate";
import formConfig from "@/config/LoginConfig";
import LoginInput from "./LoginInput";
import { Toast } from "../toast/Toast";
import { useRouter } from "next/navigation";
import { ILogin } from "@/interfaces/ILogin";

import { usePublic } from "@/hooks/usePublic";
import { useAuth } from "@/context/AuthContext";

export const LoginForm = () => {
    
    usePublic();        

    const { login } = useAuth();
    const router = useRouter();
    const loginConfig = formConfig;

    const [form, setForm] = useState<ILogin>({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    }); 
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;

        setForm((prevState: ILogin) => ({
            ...prevState,
            [name]: value,
        }));
         
        const error = validateField(name, value, form);
        setErrors((prevErrors) => ({
           ...prevErrors,
           [name]: error,
       }));
        
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
         event.preventDefault();
        try {
            await login(form);
            const userString = localStorage.getItem("user");
            const user = userString ? JSON.parse(userString) : null;
            Toast.fire({icon: 'success',title: `Welcome ${user?.name}!`});

        } catch (error: any) {
            const errorMessage = error.response.data.message;
            const messageToShow = [
                "Invalid password",
                 "User does not exist"]
                 .includes(errorMessage) 
                 ? "Invalid credentials" 
                 : errorMessage;

            Toast.fire({icon: 'error', title: messageToShow});
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
                        
                        { loginConfig.map(({name, label, type, placeholder, errorMessage}) => {
                            return ( 

                            <LoginInput
                            key={name}
                            name={name}
                            label={label}
                            type={type}
                            value={form[name as keyof typeof form]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            errorMessage={errors[name as keyof typeof errors]}
                                />

                        )}
                    )}

                        <button className={style.loginButton} type="submit">Login</button>

                        <Link className={style.registerLink} href="/auth/signup">
                            Dont have an account? Register here.
                        </Link>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm;