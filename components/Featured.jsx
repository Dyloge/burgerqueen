import Slider from '@madzadev/image-slider';
import '@madzadev/image-slider/dist/index.css';
import Image from 'next/image';

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
    <Slider
      showArrowControls={false}
      showDotControls={false}
      autoPlayInterval={5000}
      imageList={images}
      width={1100}
      height={300}
    />
  );
};

export default Featured;
