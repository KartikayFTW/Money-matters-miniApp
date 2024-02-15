import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";
import useUserDetails from "../hooks/useUserDetails";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const logOutHandler = () => {
    logout();
    toast.success("Log out successfully!");
  };

  const { userData } = useUserDetails();

  return (
    <div className="w-screen h-16 bg-slate-300 flex justify-between items-center sticky top-0 z-50 bg-red-500">
      <h2
        className="font-semibold font-quickSand font-2xl pl-5 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Money Matters
      </h2>

      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="cursor-pointer font-bold font-quickSand text-gray-700 rounded-full bg-white flex items-center justify-center mr-5 h-10 w-10">
              {userData?.userDetails[0]?.firstName?.toUpperCase().slice(0, 1)}
              {userData?.userDetails[0]?.lastName?.toUpperCase().slice(0, 1)}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-2 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <button
                    className={` group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => navigate("/profile")}
                  >
                    Edit Profile
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className={` group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={logOutHandler}
                  >
                    Log Out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
