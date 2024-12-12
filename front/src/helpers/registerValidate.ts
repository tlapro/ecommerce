/* eslint-disable @typescript-eslint/no-explicit-any */

export const registerValidate = (fieldName: string, value: string, form: any) => {
    let error = "";

    const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhone = /^[0-9]+$/;
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
    if (fieldName === "repeatPassword" && form.repeatPassword && value !== form.password) {
        error = "Las contraseñas no coinciden.";
    } else if (value.trim() === "") {
        error = "Repeat password is required.";
    }

    if (fieldName === "address") {
        if (value.trim() === "") {
            error = "Address is required.";
        }
    }
    if (fieldName === "phone") {
        if (value.trim() === "") {
            error = "Phone is required.";
        } else if (!regexPhone.test(value)) {
            error = "Phone must be a number.";
        }
    }
    
    return error;
};
