import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  const modalRoot = document.getElementById("root") as HTMLElement;

  return ReactDOM.createPortal(children, modalRoot);
}

export default Modal;
