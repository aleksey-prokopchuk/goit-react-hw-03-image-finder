import { Children, Component } from "react";
import { createPortal } from "react-dom";
import css from '../Modal/Modal.module.css'

const modalRoot = document.getElementById('modal-root');
const { overlay, modal } = css;

class Modal extends Component {
  render() {
    // console.log(this.props.items)
    const { largeImageURL, tags } = this.props.items;
    const { children } = this.props;
    return createPortal(
      <div className={overlay}>
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