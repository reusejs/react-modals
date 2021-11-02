import React, { useState } from "react";

const Closable = (Component) => ({ ...props }) => {
  const [showModal, setShowModal] = useState(true);

  const resolveModal = (value) => {
    setShowModal(false);
    props.resolve(value);
  };

  return (
    <Component resolveModal={resolveModal} showModal={showModal} {...props} />
  );
};

export default Closable;
