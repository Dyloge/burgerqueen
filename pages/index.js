import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import SmallCardList from '../components/SmallCardList';
import BigCardList from '../components/BigCardList';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import OpenModal from '../components/OpenModal';
import HMenu from '../components/HMenu';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title> Burger Queen &#128081;</title>
        <meta charset='UTF-8'></meta>
        <meta name='description' content='BurgerKing Clone' />
        <link rel='icon' href='/img/svglogo.svg' />
      </Head>
      <Featured />

      <OpenModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        onClick={closeModal}
      />
      <SmallCardList
        title='Nowości|Wszystkie'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        onClick={openModal}
      />
      <BigCardList />
      <SmallCardList
        title='Polecane Dla Ciebie'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        onClick={openModal}
      />
      <Banner1 />
      <HMenu />
      <Banner2 />
    </div>
  );
}
