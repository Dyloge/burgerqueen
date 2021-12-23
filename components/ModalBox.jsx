import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ModalBox.module.css';
const ModalBox = ({ onClick }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Wybierz formę zamówienia</div>
          <button className={styles.closeButton} onClick={onClick}>
            <div className={styles.closeIconContainer}>
              <Image
                className={styles.closeIcon}
                src='/img/close.svg'
                width='38'
                height='38'
                alt=''
              />
            </div>
          </button>
        </div>
        <div className={styles.bloc_tabs}>
          <button
            className={
              toggleState === 1
                ? `${styles['tabs']} ${styles['active_tabs']}`
                : styles.tabs
            }
            onClick={() => toggleTab(1)}>
            <h4 className={styles.textTab}>Zamów z Dostawą</h4>
            <div className={styles.iconWrapper}>
              <Image
                src='/img/scooter.svg'
                alt=''
                width='30'
                height='30'
                className={styles.orderIcon}
              />
            </div>
          </button>
          <button
            className={
              toggleState === 2
                ? `${styles['tabs']} ${styles['active_tabs']}`
                : styles.tabs
            }
            onClick={() => toggleTab(2)}>
            <h4 className={styles.textTab}>Zamów na Wynos</h4>
            <div className={styles.iconWrapper}>
              <Image
                src='/img/shoppingBag.svg'
                alt=''
                width='30'
                height='30'
                className={styles.cartIcon}
              />
            </div>
          </button>
        </div>
        <div className={styles.content_tabs}>
          <div
            className={
              toggleState === 1
                ? `${styles['content']} ${styles['active_content1']}`
                : styles.content
            }>
            <div className={styles.search}>
              <input
                type='text'
                className={styles.searchTerm}
                placeholder='Wpisz swój adres...'
              />
              <button type='submit' className={styles.searchButton}>
                <Image src='/img/location.svg' width='32' height='32' alt='' />
              </button>
            </div>
            <button className={styles.findRestaurantButton}>
              Znajdź inną restaurację
            </button>
          </div>
          <div
            className={
              toggleState === 2
                ? `${styles['content']} ${styles['active_content2']}`
                : styles.content
            }>
            <div className={styles.search}>
              <input
                type='text'
                className={styles.searchTerm}
                placeholder='Wpisz swój adres...'
              />
              <button type='submit' className={styles.searchButton}>
                <Image src='/img/location.svg' width='32' height='32' alt='' />
              </button>
            </div>
            <button className={styles.findRestaurantButton}>
              Znajdź inną restaurację
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalBox;
