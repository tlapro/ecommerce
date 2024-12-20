export const validateField = (fieldName: string, value: string) => {
    let error = "";
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fieldName === "email" && value.trim() === "") {
        error = "Enter a mail";
    } else if (fieldName === "email" && !regexMail.test(value)) {
        error = "The mail is not valid.";
    } else if (fieldName === "password" && value === "") {
        error = "Enter a password";
    }

    return error;
  };
   