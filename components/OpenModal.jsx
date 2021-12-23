import Modal from 'react-modal';

import ModalBox from './ModalBox';
import styles from '../styles/OpenModal.module.css';
Modal.defaultStyles.overlay.backgroundColor = 'rgba(75, 29, 16, 0.7)';

const OpenModal = ({ modalIsOpen, setModalIsOpen, onClick }) => {
  return (
    <div className={styles.container}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={styles.modalContainer}>
        <ModalBox className={styles.show} onClick={onClick} />
      </Modal>
    </div>
  );
};

export default OpenModal;
