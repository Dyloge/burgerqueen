import styles from '../styles/Select.module.css';

const Select = () => {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        <option className={styles.option} value='2'>
          PL
        </option>
        <option className={styles.option} value='1'>
          EN
        </option>
      </select>
    </div>
  );
};

export default Select;
