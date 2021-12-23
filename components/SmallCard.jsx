import Image from 'next/image';
import styles from '../styles/SmallCard.module.css';
import { useState } from 'react';

const SmallCard = ({ onClick, modalIsOpen, setModalIsOpen }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.image}>
            <Image
              src='/img/menuItemImage.png'
              alt=''
              width='160'
              height='160'
            />
          </div>
          <div className={styles.content}>
            <span className={styles.price}>
              39 <sup className={styles.superscript}>99</sup>
            </span>
            <h1 className={styles.title}>Double Queen&apos;s Chimichurry</h1>

            {/*Buttons*/}

            <div className={styles.wrapper}>
              <button
                className={styles.customizeButtonWrapper}
                onClick={onClick}>
                <div className={styles.customizeIconWrapper}>
                  <span className={styles.customizeIcon}>
                    <Image
                      className={styles.iconCustomizeImage}
                      src='/img/chef.svg'
                      alt=''
                      width='24'
                      height='24'
                    />
                  </span>
                  <span className={styles.customizeText}>Dopasuj</span>
                </div>
              </button>
              <button className={styles.cartButtonWrapper}>
                <div className={styles.cartIconWrapper}>
                  <span className={styles.cartIcon}>
                    <Image
                      className={styles.iconCartImage}
                      src='/img/shoppingBag.svg'
                      alt=''
                      width='24'
                      height='24'
                    />
                  </span>
                  <span className={styles.cartText}>Do koszyka</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
