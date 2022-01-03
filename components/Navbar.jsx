import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbarsContainer}>
      <div className={styles.firstNavbarContainer}>
        <div className={styles.item}>
          <button className={styles.orderButton}>
            <h2>Zamów online</h2>
            <Image
              src='/img/scooter.svg'
              alt=''
              width='30'
              height='30'
              className={styles.orderIcon}
            />
          </button>
        </div>
        {/* Hamberger Menu */}

        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src='/img/svglogo.svg' alt='' width='73' height='80' />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.loginAndCartContainer}>
            <button className={styles.loginButton}>
              <h2>Zaloguj się</h2>
            </button>
            <div className={styles.cart}>
              <Image
                className={styles.cartLogo}
                src='/img/shoppingBag.svg'
                alt=''
                width='30px'
                height='30px'
              />
              <div className={styles.counter}>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondNavbarContainer}>
        <div className={styles.secondNavItem}>Menu</div>
        <div className={styles.secondNavItem}>Oferty&thinsp;specjalne</div>
        <div className={styles.secondNavItem}>Restauracje</div>
      </div>
    </div>
  );
};

export default Navbar;
