import React from "react";
import Simple from "./index";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";

export default {
  title: "Modals/Simple",
  component: Simple,
};

const ModalContent = React.forwardRef((props, ref) => {
  return (
    <div
      className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
      ref={ref}
    >
      <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => props.resolveModal(false)}
        >
          <span className="sr-only">Close</span>
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="sm:flex sm:items-start">

        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {props.config.title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{props.config.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
          onClick={() => props.resolveModal(true)}
        >
          Yes
        </button>
      </div>
    </div>
  );
});

const Template = (args) => {

  const openModal = async (item) => {
    let result = await Simple({
      title: 'Simple Modal',
      description:
        'Are we good?',
      ModalContent: ModalContent
    })
    console.log("Result", result)
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full flex justify-center items-center">
      <button
        className="p-2 bg-blue-600 hover:bg-gray-700 text-white"
        onClick={() => {
          openModal()
        }}>Click me</button>
    </div>)
};


export const Default = Template.bind({});

Default.args = {

};

