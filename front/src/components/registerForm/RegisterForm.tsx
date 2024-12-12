/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import style from "./RegisterForm.module.css";
import { IRegister } from "@/interfaces/IRegister";
import { useState } from "react";
import { registerValidate } from "@/helpers/registerValidate";
import SignUpConfig from "@/config/SignUpConfig";
import FormInput from "./FormInput";
import signUp from "@/helpers/singUp";
import { Toast } from "../toast/Toast";
import { useRouter } from "next/navigation";


const initialForm: IRegister = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    address: "",
    phone: "",
}

export const RegisterForm = () => {
    const router = useRouter();
    const [form, setForm] = useState<IRegister>(initialForm)

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    }); 
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            try {
                await signUp(form);
                Toast.fire({
                    icon: 'success',
                    title: 'User created successfully',
                });
                router.replace("/auth/login");
            } catch (error: any) {
                const errorMessage = error.response?.data?.message || "An error occurred";
                Toast.fire({
                    icon: 'error',
                    title: errorMessage,
                });
            }
    }

    return (
        <div>
            <div>
                <div className={style.containerTitle}>
                <h1 className="titleContent">My Apple Store</h1>
                </div>

                <div className={style.registerContainer}>
                    <form className={style.registerForm} onSubmit={handleSubmit} action="">
                        <h1 className={`text-4xl font-bold text-center cursor-default mt-3 ${style.title}`}>Register</h1>
                        <hr className={style.line} />

                        { SignUpConfig.map(({name, label, type, placeholder }) => {
                            return (
                                <div className={style.registerReq}>
                                <FormInput 
                                key={name}
                                name={name}
                                label={label}
                                type={type}
                                value={form[name as keyof typeof form]}
                                onChange={handleChange}
                                placeholder={placeholder}
                                errorMessage={errors[name as keyof typeof errors]}
                                />
                                </div>
                            )
                        })}

                    <button className={style.registerButton} type="submit">Register</button>
                    <Link className={style.registerLink} href="/auth/login">
                        Already have an account? Login here
                    </Link>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default RegisterForm;