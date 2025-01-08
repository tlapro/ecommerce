/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from 'sweetalert2';

const getThemeVariables = () => {

  const theme = localStorage.getItem('theme'); 

  const themeColors = theme === 'light' ? {
    backgroundColor: '#ffffff',
    textColor: '#000000',        
    iconColor: '#61a6b6',        
    confirmButtonColor: '#61a6b6', 
    cancelButtonColor: '#b12929',   
  } : {
    backgroundColor: '#161616',  
    textColor: '#ffffff',        
    iconColor: '#B58863',        
    confirmButtonColor: '#1e3a43', 
    cancelButtonColor: '#b12929',   
  };

  return themeColors;
};

export const ToastConditional = async (
  title: string, 
  text: string, 
  confirmButtonText: string = 'Sí, vaciar', 
  cancelButtonText: string = 'Cancelar'
): Promise<any> => {

  const { backgroundColor, textColor, iconColor, confirmButtonColor, cancelButtonColor } = getThemeVariables();

  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: confirmButtonColor, 
    cancelButtonColor: cancelButtonColor,    
    confirmButtonText,
    cancelButtonText,
    background: backgroundColor,  
    color: textColor,             
    iconColor: iconColor,        
  });
};

export default ToastConditional;
