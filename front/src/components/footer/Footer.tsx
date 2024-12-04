import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.heading}>Sobre Nosotros</h4>
          <p className={styles.text}>
            Somos una tienda comprometida con la calidad y el servicio al cliente, ofreciendo productos excepcionales.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Enlaces Útiles</h4>
          <ul className={styles.list}>
            <li><a href="/about" className={styles.link}>Quiénes Somos</a></li>
            <li><a href="/products" className={styles.link}>Productos</a></li>
            <li><a href="/contact" className={styles.link}>Contacto</a></li>
            <li><a href="/faq" className={styles.link}>Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Contáctanos</h4>
          <p className={styles.text}>📧 contacto@ecommerce.com</p>
          <p className={styles.text}>📞 +54 11 1234 5678</p>
          <p className={styles.text}>📍 Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Mi eCommerce.
        </p>
      </div>
    </footer>
  );
}
