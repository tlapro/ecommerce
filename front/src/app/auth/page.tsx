// el layout recibe un children, next ya se encarga de que las paginas que tenemos en la carpeta sean las children del layout
// children llega como una prop. La segunda parte de Readonly (no vamos a modificar la prop quiere decir esto)
//, todos los elementos de React son React.ReactNode o el otro que no me acuerdo.

export default function AuthLayout({ 
    children,
 }: Readonly<
     { children: React.ReactNode }>) {
  
  return (

    <div>
        {children}
    </div>

  );
  
}