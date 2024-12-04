import { IUser } from "./IUser";

export interface ILoginSucces {
    login: boolean;
    user: IUser;
    token: string;
}