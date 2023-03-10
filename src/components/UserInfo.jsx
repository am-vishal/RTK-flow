import React from "react";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/actions";

const UserInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users); //["Tony", "Mike"]
  const fakeData = fakeUserData(); //Tony, Mike

  const addNewUser = () => {
    dispatch(addUser(fakeData));
  };

  const handleDeleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const removeAllUser = () => {
    dispatch(clearAllUsers());
  };

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container-md d-flex justify-content-center">
        <div className="card shadow w-100">
          <div className="card-header bg-primary text-white">
            <h5 className="card-title m-0">List of User Details</h5>
          </div>
          <div className="card-body">
            <button onClick={addNewUser} className="btn btn-success mb-3">
              <i className="fas fa-user-plus me-2"></i>
              Add User
            </button>
            <ol className="list-group list-group-numbered">
              {data.map((user, id) => (
                <li key={id} className="list-group-item">
                  <span className="fw-bold mx-1">{user}</span>
                  <button className="btn btn-danger btn-sm float-end" onClick={() => handleDeleteUser(id)}>
                    <i className="fas fa-user-minus"></i>
                  </button>
                </li>
              ))}
            </ol>
            {data.length > 0 && (
              <button onClick={removeAllUser} className="btn btn-danger mt-3 float-end">
                <i className="fas fa-users-slash me-2"></i>
                Delete All Users
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
