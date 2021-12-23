import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Select from './Select';
import DownloadAppButtons from '../components/DownloadAppButtons';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titr}>MENU</div>
      <div className={styles.item}>Nowości</div>
      <div className={styles.item}>Zestawy</div>
      <div className={styles.item}>Burgery</div>
      <div className={styles.item}>Pockety</div>
      <div className={styles.item}>Zielone Menu</div>
      <div className={styles.item}>Sałatki</div>
      <div className={styles.item}>Dodatki</div>
      <div className={styles.item}>Desery</div>
      <div className={styles.item}>Napoje</div>
      <div className={styles.item}>Kupony</div>
      <div className={styles.titr}>BURGER KING</div>
      <div className={styles.item}>O nas</div>
      <div className={styles.item}>Restauracje</div>
      <div className={styles.item}>Kontakt</div>
      <div className={styles.item}>Kariera</div>
      <div className={styles.titr}>INFORMACJE</div>
      <div className={styles.item}>Alergeny i wartości odżywcze</div>
      <div className={styles.item}>Regulamin</div>
      <div className={styles.item}>Polityka prywatności</div>
      <div className={styles.dlTitle1}>
        Zamawiaj szybko i wygodnie z darmową aplikacją Burger King Polska
      </div>
      <div className={styles.dlTitle2}>Burger King Polska</div>
      <DownloadAppButtons />

      <div className={styles.titr}>A także przez telefon:</div>
      <div className={styles.tel}>22 536 36 36</div>
      <div className={styles.selectButton}>
        <Select />
      </div>
      <div className={styles.socialMedia}>
        <a className={styles.socialMediaIcon}>
          <Image src='/img/facebook.svg' alt='' width='32' height='32'></Image>
        </a>
        <a classsName={styles.socialMediaIcon}>
          <Image src='/img/youtube.svg' alt='' width='42' height='42'></Image>
        </a>
        <a className={styles.socialMediaIcon}>
          <Image src='/img/instagram.svg' alt='' width='32' height='32'></Image>
        </a>
      </div>
    </div>
  );
};

export default Footer;
