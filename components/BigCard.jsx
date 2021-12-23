import Image from 'next/image';
import styles from '../styles/BigCard.module.css';
const BigCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div className={styles.image}>
            <Image
              src='/img/menu2ItemImage.png'
              alt=''
              width='260'
              height='260'
            />
          </div>
          <div className={styles.content}>
            <span className={styles.price}>39,99</span>
            <h1 className={styles.title}>Double Queen&apos;s Chimichurry</h1>
            <div className={styles.buttonsWrapper}>
              <a href='#' className={styles.buttonShippingCart}>
                <span className={styles.iconShippingCart}>
                  <Image
                    src='/img/shoppingBag.svg'
                    alt=''
                    width='30'
                    height='30'
                  />
                </span>
                <span className={styles.textShippingCart}>Do koszyka</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
