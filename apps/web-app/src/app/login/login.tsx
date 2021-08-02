import React, {useState} from "react";
import {Button} from "react-bootstrap";
import LoginModal from "./login-modal";


function Login() {
  const [clicked, setClick] = useState(false);
  const handleShow = () => setClick(true);

  return (
    <div>
      <Button variant="light" size="sm" onClick={handleShow}>
        Login
      </Button>
      {clicked ? <LoginModal /> : ""}
    </div>
  );
}

export default Login
