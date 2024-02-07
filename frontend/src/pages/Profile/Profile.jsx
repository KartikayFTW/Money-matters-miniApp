import React, { useState } from "react";

const Profile = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John",
    email: "John@gmail.com",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const handleUpdate = () => {
    setIsEditing(false);

  };


  const handleCancel = () => {
    setIsEditing(false);
   
  };

  return (
    <div className="flex w-screen h-[90vh] items-center justify-center overflow-hidden">
      <div className="flex flex-col h-auto w-[30rem] items-center bg-gray-300 p-4 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold">Personal Details</h2>
        {isEditing ? (
          <>
            <div className="flex flex-col w-full px-4">
              <label htmlFor="name" className="text-lg font-medium">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="mb-4 px-3 py-2 rounded-md border-2 border-gray-300"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col w-full px-4">
              <label htmlFor="email" className="text-lg font-medium">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="mb-4 px-3 py-2 rounded-md border-2 border-gray-300"
                placeholder="Email"
              />
            </div>
          </>
        ) : (
          <>
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
          </>
        )}
        {isEditing ? (
          <div className="flex space-x-4">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
