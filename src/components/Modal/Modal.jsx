import { Component } from "react";
import { createPortal } from "react-dom";
import css from '../Modal/Modal.module.css'

const modalRoot = document.getElementById('modal-root');
const { overlay, modal } = css;


class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal)
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal)
  };
    
  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
 };
  };

  render() {
    const { closeModal } = this;
    // console.log(this.props.items)
    // const { largeImageURL, tags } = this.props.items;
    const { children } = this.props;
    return createPortal(
      <div className={overlay} onClick={closeModal}>
        <div className={modal}>
          {children}
          {/* <img src={largeImageURL} alt={tags} /> */}
        </div>
      </div>,
      modalRoot
    );
  };
};

export default Modal;