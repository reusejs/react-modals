import { useRef } from "react";
import { Dialog } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
// import mountComponent from "../mountComponent.js";
import { mountComponent } from "@reusejs/react-utils";
import Closable from "../closable";
import "../tailwind.css";
import ModalWrapper from "../modalWrapper";

function ClosableModal({ visible, onAction, config }) {
  const cancelButtonRef = useRef(null);

  return (
    <ModalWrapper showModal={visible} resolveModal={onAction}>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              {config.heading}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{config.message}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => onAction(true)}
          >
            {config.yesText || "Yes, Continue"}
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={() => onAction(false)}
            ref={cancelButtonRef}
          >
            {config.noText || "No, Cancel"}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export const canBeClosed = mountComponent(Closable(ClosableModal), 1000);

function Exportable(config, options = {}) {
  return canBeClosed({ config, options });
}

export default Exportable;
