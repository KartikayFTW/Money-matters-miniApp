import React, { useState } from "react";
import usersData from "../../utils/dummyData/userData.json";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [activeUserId, setActiveUserId] = useState(null);
  console.log("inside",activeUserId)


  const openModalForUser = (userId) => {
    setActiveUserId(userId);
  };


  const closeModal = () => {
    setActiveUserId(null);
  };

  const naviagte = useNavigate();
  return (
    <div className="">
 
      <div className="flex justify-center pt-10">
        <span className="text-lg font-medium">Your balance is : &nbsp;</span>
        <span className="text-lg font-medium">500</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-center pt-10 font-semibold text-lg ">List of Users</p>
        <ul className="w-96 max-w-full bg-white   gap-4 flex flex-col  justify-between items-center">
          {usersData.users.map((user) => (
            <li
              key={user.id}
              className="flex border-1 h-16 rounded-lg px-2 sm:px-8 border-green-400 bg-gray-300 w-full justify-between items-center"
            >
              <span>{user.name}</span>
              <button
                className="bg-[#122140] p-2 rounded-lg text-white "
                onClick={() => openModalForUser(user.id)
                }
              >
                <span className="text-sm sm:text-lg  font-semibold font-poppins">
                  Send Money
                </span>
              </button>
            </li>
          ))}
        </ul>
        {activeUserId && (
          <Modal isOpen={activeUserId !== null} onClose={closeModal} activeUserId={activeUserId} />
        )}
      </div>
    </div>
  );
};

export default Home;
