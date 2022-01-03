import Image from 'next/image';
import styles from '../styles/Banner2.module.css';
const Banner2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.lettuce}>
          <Image src='/img/lettuce.png' width='320' height='320' alt='' />
        </div>
        <div className={styles.cucamber}>
          <Image src='/img/cucamber.png' width='420' height='420' alt='' />
        </div>
        <div className={styles.onion}>
          <Image src='/img/onion.png' width='450' height='450' alt='' />
        </div>
        <div className={styles.tomatoes}>
          <Image src='/img/tomatoes.png' width='290' height='290' alt='' />
        </div>
        <div className={styles.onion2}>
          <Image src='/img/onion.png' width='200vw' height='200vw' alt='' />
        </div>
        <div className={styles.tomatoes2}>
          <Image src='/img/tomatoes2.png' width='320' height='250' alt='' />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.title1}> Nasze burgery są robione ze</div>
          <div className={styles.title1}>świeżych produktów od</div>
          <div className={styles.title1}>lokalnych dostawców</div>
        </div>
        <button className={styles.button}>Sprawdź</button>
      </div>
    </div>
  );
};

export default Banner2;
