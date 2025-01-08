import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.heading}>About Us</h4>
          <p className={styles.text}>
            We are a store committed to quality and customer service, offering exceptional products.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Useful Links</h4>
          <ul className={styles.list}>
            <li><a href="/about" className={styles.link}>About Us</a></li>
            <li><a href="/products" className={styles.link}>Products</a></li>
            <li><a href="/contact" className={styles.link}>Contact</a></li>
            <li><a href="/faq" className={styles.link}>FAQs</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact Us</h4>
          <p className={styles.text}>📧 contact@ecommerce.com</p>
          <p className={styles.text}>📞 +54 11 1234 5678</p>
          <p className={styles.text}>📍 Buenos Aires, Argentina</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} My eCommerce.
        </p>
      </div>
    </footer>
  );
}
