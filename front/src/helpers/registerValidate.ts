import { IRegister } from "@/interfaces/IRegister";

export const registerValidate = (fieldName: string, value: string, form: IRegister) => {
    let error = "";

    const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fieldName === "name") {
        if (value.trim() === "") {
            error = "Name is required.";
        } else if (!regexName.test(value)) {
            error = "Name can only contain letters and spaces.";
        }
    }
    if (fieldName === "email" && !regexMail.test(value)) {
        error = "The mail is not valid.";
    }

    if (fieldName === "password") {
        if (value.length < 6) {
            error = "Password must have at least 6 characters.";
        }
        else if (!/[A-Z]/.test(value)) {
            error = "Password must contain at least one uppercase letter.";
        } else if (!/[0-9]/.test(value)) {
            error = "Password must contain at least one number.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            error = "Password must contain at least one special character.";
        }
    }


    return error;
};
