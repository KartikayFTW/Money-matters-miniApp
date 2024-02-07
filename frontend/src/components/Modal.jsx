import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

const Modal = ({ isOpen, onClose,activeUserId }) => {
    console.log("activeUserId",activeUserId)
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen max-w-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto sm:w-1/2 sm:h-1/2 h-1/2 w-full max-w-full rounded bg-white flex flex-col justify-between gap-5 items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <Dialog.Title className="text-center font-medium text-xl pt-10">
                You are about to send Money
              </Dialog.Title>
              <Dialog.Description className="">
                The Will be send in a flash
              </Dialog.Description>
            </div>

            <div className="flex flex-col  gap-4 pb-10 justify-center items-center">
              <label
                htmlFor="amount"
                className="text-sm font-semibold font-poppins"
              >
                Amount
              </label>
              <input
                id="amount"
                placeholder="Enter Amount"
                type="text"
                className="h-10 w-full focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 "
              />
              <div className="flex gap-10 mb-10">
                <button
                  className="bg-[#122140] p-2 rounded-lg text-white "
                  onClick={() => openModalForUser(user.id)}
                >
                  <span className="text-sm sm:text-lg  font-semibold font-poppins">
                    Confirm
                  </span>
                </button>
                <button
                  className="bg-[#122140] p-2 rounded-lg text-white "
                  onClick={onClose}
                >
                  <span className="text-sm sm:text-lg  font-semibold font-poppins">
                    Cancel
                  </span>
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
