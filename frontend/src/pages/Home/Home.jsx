import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHome from "../../hooks/useHome/index.js";
import { useDebounce } from "../../hooks/useDebounce/index.js";
import TransferModal from "../../components/TransferModal.jsx";

const Home = () => {
  const [activeUserId, setActiveUserId] = useState(null);

  const openModalForUser = (userId) => {
    setActiveUserId(userId);
  };

  const closeModal = () => {
    setActiveUserId(null);
  };

  const [userQuery, setUserQuery] = useState("");
  const debouncedUserQuery = useDebounce(userQuery, 500);
  const { balanceData, allUsersData } = useHome(debouncedUserQuery);

  return (
    <div className="">
      <div className="flex justify-center pt-10">
        <span className="text-lg font-medium font-poppins">
          Your balance is : &nbsp;
        </span>
        <span className="text-lg font-medium font-poppins">
          {balanceData?.balance[0].balance}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-center pt-10 font-semibold text-lg font-poppins">
          List of Users
        </p>
        <div className="flex   gap-4 pb-10 justify-center items-center">
          <input
            id="user"
            placeholder="Enter User"
            type="text"
            className="h-10 w-full focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700  font-poppins"
            onChange={(e) => setUserQuery(e.target.value)}
          />
        </div>
        {allUsersData?.users.length === 0 ? (
          <p className="font-poppins">No user Found</p>
        ) : (
          <ul className="w-[40rem] max-w-full bg-white   gap-4 flex flex-col  justify-between items-center">
            {allUsersData?.users.map((user) => (
              <li
                key={user.id}
                className="flex border-1 h-16 rounded-lg px-2 sm:px-8 border-green-400 bg-gray-300 w-full justify-between items-center"
              >
                <div
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer font-bold font-quickSand text-gray-700 rounded-full bg-white flex items-center justify-center mr-5 h-10 w-10"
                >
                  {user?.firstName?.slice(0, 1) + user?.lastName?.slice(0, 1)}
                </div>
                <span className="font-poppins">{`${user.firstName} ${user.lastName}`}</span>
                <button
                  className="bg-[#122140] p-2 rounded-lg text-white "
                  onClick={() => openModalForUser(user?._id)}
                >
                  <span className="text-sm sm:text-lg  font-semibold font-poppins">
                    Send Money
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {activeUserId && (
          <TransferModal
            isOpen={activeUserId !== null}
            onClose={closeModal}
            activeUserId={activeUserId}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
