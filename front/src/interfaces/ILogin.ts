import { Dispatch, SetStateAction } from "react";

export interface LoginProps {
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
}
export default LoginProps;