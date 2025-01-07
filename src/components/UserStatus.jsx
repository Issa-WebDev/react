import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  return loggedIn && isAdmin ? <h1>Welcom Admin</h1> : <h1>Welcome user</h1>;
};

export default UserStatus;
