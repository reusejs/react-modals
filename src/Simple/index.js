import React, { useRef } from "react";
import { mountComponent } from "@reusejs/react-utils";
import Closable from "../closable";
import "../tailwind.css";
import ModalWrapper from "../modalWrapper";

function ClosableModal({ showModal, resolveModal, config }) {
  return (
    <ModalWrapper showModal={showModal} resolveModal={resolveModal}>
      <config.ModalContent
        showModal={showModal}
        resolveModal={resolveModal}
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
