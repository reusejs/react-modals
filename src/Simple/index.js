import React, { useRef } from "react";
import { mountComponent } from "@reusejs/react-utils";
import Closable from "../closable";
import "../tailwind.css";
import ModalWrapper from "../modalWrapper";

function ClosableModal({ visible, onAction, config }) {
  return (
    <ModalWrapper showModal={visible} resolveModal={onAction}>
      <config.ModalContent
        showModal={visible}
        resolveModal={onAction}
        config={config}
      />
    </ModalWrapper>
  );
}

export const canBeClosed = mountComponent(Closable(ClosableModal), 1000);

function Exportable(config, options = {}) {
  return canBeClosed({ config, options });
}

export default Exportable;
