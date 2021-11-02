import React, { useState } from "react";

const Closable = (Component) => ({ ...props }) => {
  const [visible, setVisible] = useState(true);

  const onAction = (value) => {
    setVisible(false);
    props.resolve(value);
  };

  return <Component onAction={onAction} visible={visible} {...props} />;
};

export default Closable;
