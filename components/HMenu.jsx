import styles from '../styles/HMenu.module.css';
import Image from 'next/image';
const HMenu = () => {
  return (
    <div className={styles.nav}>
      <input
        type='checkbox'
        id='navCheckbox'
        className={styles.nav__checkbox}
      />
      <label htmlFor='navCheckbox' className={styles.nav__toggle}>
        <div className={styles.menu}>
          <Image src='/img/hamburgerMenu.svg' width='32' height='32' alt='' />
        </div>
        <div className={styles.close}>
          <Image src='/img/yellowClose.svg' width='32' height='32' alt='' />
        </div>
      </label>
      <div className={styles.items}>
        <ul className={styles.nav__menu}>
          <li>
            <a href='#'>Nowości</a>
          </li>
          <li>
            <a href='#'>Nowości</a>
          </li>
          <li>
            <a href='#'>Zestawy</a>
          </li>
          <li>
            <a href='#'>Pockety</a>
          </li>
          <li>
            <a href='#'>Zielone Menu</a>
          </li>
          <li>
            <a href='#'>Sałatki</a>
          </li>
          <li>
            <a href='#'>Dodatki</a>
          </li>
          <li>
            <a href='#'>Desery</a>
          </li>
          <li>
            <a href='#'>Napoje</a>
          </li>
          <li>
            <a href='#'>Promocje</a>
          </li>
          <li>
            <a href='#'>Oferty specjalne</a>
          </li>
          <li>
            <a href='#'>Restauracje</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HMenu;
