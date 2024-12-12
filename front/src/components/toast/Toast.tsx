import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: 'var(--primary-color)', 
    color: 'var(--secondary-color)', 
    iconColor: 'var(--secondary-color)',  
    customClass: {
        popup: 'animated-toast', 
    },
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer); 
        toast.addEventListener('mouseleave', Swal.resumeTimer); 
    },
});

