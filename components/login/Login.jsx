import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { login, logout } from "../../redux/login/loginAction";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const logger = useSelector((state) => state.loggedIn.loggedIn);

  return (
    <div className="d-flex justify-content-center flex-column">
      <h1>status: - {logger ? "Logged in" : "LoggedOut"} </h1>
      {logger ? (
        <Button className="mx-1 my-1" onClick={() => dispatch(logout())}>
          Log out
        </Button>
      ) : (
        <Button className="mx-1 my-1" onClick={() => dispatch(login())}>
          Login
        </Button>
      )}
    </div>
  );
}
