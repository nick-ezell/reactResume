import React, { useModalContext } from "react";

import "../../assets/style.css";

const Modal = () => {
  const [state, dispatch] = useModalContext();
  return (
    <div className={state.visibility}>
      <h1>Yo!</h1>
    </div>
  );
};

export default Modal;
