import Slider from '@madzadev/image-slider';
import '@madzadev/image-slider/dist/index.css';
import styles from '../styles/Featured.module.css';

const Featured = () => {
  const images = [
    { url: '/img/slider1.jpg' },
    { url: '/img/slider2.jpg' },
    { url: '/img/slider3.jpg' },
    { url: '/img/slider4.jpg' },
    { url: '/img/slider5.jpg' },
    { url: '/img/slider6.jpg' },
  ];

  return (
    <div className={styles.slider}>
      <Slider
        showArrowControls={false}
        showDotControls={false}
        autoPlayInterval={5000}
        imageList={images}
        width={1100}
        height={300}
      />
    </div>
  );
};

export default Featured;
