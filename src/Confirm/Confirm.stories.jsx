import React from "react";
import Confirm from "./index";

export default {
  title: "Modals/Confirm",
  component: Confirm,
};

const Template = (args) => {

  const openModal = async (item) => {
    let result = await Confirm({
      yesText: 'Yes, Destroy Session',
      noText: 'Nopes',
      heading: 'Destroy Session',
      message:
        'Are you sure you want to delete? The application which is using this token would not be able to do further.',
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

