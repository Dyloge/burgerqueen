import styles from '../styles/BigCardList.module.css';
import BigCard from './BigCard';
const BigCardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title1}>Najczęściej&thinsp;kupowane</div>
      </div>

      <div className={styles.wrapper}>
        <BigCard />
        <BigCard />
        <BigCard />
      </div>
    </div>
  );
};

export default BigCardList;
