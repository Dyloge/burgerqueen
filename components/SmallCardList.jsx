import styles from '../styles/SmallCardList.module.css';
import SmallCard from './SmallCard';

const SmallCardList = ({ title, onClick, modalIsOpen, setModalIsOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.wrapper}>
        <SmallCard
          onClick={onClick}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <SmallCard onClick={onClick} />
        <SmallCard onClick={onClick} />
      </div>
    </div>
  );
};

export default SmallCardList;
