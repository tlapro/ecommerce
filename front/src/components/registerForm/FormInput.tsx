export default function FormInput({ 
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
    onChange: (e) => void;
    placeholder: string
    errorMessage: string;
}) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange}
        placeholder={placeholder} 
        required
        />
        {errorMessage && (
        <span className="text-red-500 text-[1.2rem] mt-1">{errorMessage}</span>
)}
        </>
    )
}