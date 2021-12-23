import Image from 'next/image';
import styles from '../styles/Banner1.module.css';
const Banner1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.burgery}>
        <Image src='/img/banner1.jpg' alt='' width='500' height='300' />
      </div>
      <div className={styles.zestawy}>
        <Image src='/img/banner2.jpg' alt='' width='500' height='300' />
      </div>
      <div className={styles.zieloneMenu}>
        <Image src='/img/banner3.jpg' alt='' width='500' height='300' />
      </div>
    </div>
  );
};

export default Banner1;
