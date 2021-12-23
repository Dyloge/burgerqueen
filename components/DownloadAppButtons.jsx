import styles from '../styles/DownloadAppButtons.module.css';
import Image from 'next/image';

const DownloadAppButtons = () => {
  return (
    <div className={styles.container}>
      <a className={styles.button} href='#'>
        <div className={styles.company}>
          <Image
            className={styles.icon}
            src='/img/googlePlay.svg'
            alt=''
            width='33'
            height='33'
          />
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>GET IT ON</div>
          <div className={styles.text2}>Google Play</div>
        </div>
      </a>
      <a className={styles.button} href='#'>
        <div className={styles.company}>
          <Image
            className={styles.appleIcon}
            src='/img/apple.svg'
            alt=''
            width='33'
            height='33'
          />
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>Download on the</div>
          <div className={styles.text2}>App Store</div>
        </div>
      </a>
      <a className={styles.button} href='#'>
        <div className={styles.company}>
          <Image
            className={styles.icon}
            src='/img/appgallery.svg'
            alt=''
            width='33'
            height='33'
          />
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>ODKRYWAJ W</div>
          <div className={styles.text2}>AppGallery</div>
        </div>
      </a>
    </div>
  );
};

export default DownloadAppButtons;
