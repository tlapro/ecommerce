import style from "./LoginForm.module.css";

export default function LoginInput({ 
    name, 
    label, 
    type, 
    value,
    onChange,
    placeholder,
    errorMessage,
     } : {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
    errorMessage: string;
}) {
    return (
        <div>
        <div className={style.loginReq}>

        <label htmlFor={name}>{label}</label>
        <input 
        className=""
        onChange={onChange} 
        type={type} 
        name={name}
        required 
        placeholder={placeholder}
        value={value}
        />
        {errorMessage && (
            <span className="text-red-500 text-[1.2rem] mt-1">{errorMessage}</span>
        )}
        </div>
        </div>
    )
}