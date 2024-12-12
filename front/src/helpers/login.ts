import { ILogin } from "@/interfaces/ILogin";
import axios from "axios";

export default async function login(loginForm: ILogin) {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, loginForm)

}