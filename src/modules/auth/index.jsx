import { useState } from "react";
import { loginService, regService } from "./api";

export const AuthModule = () => {
  const [isReg, setIsReg] = useState(false);
  const [authData, setAuthData] = useState({
    "email": "", "password": ""
  });

  function submitHandler(e) {
    e.preventDefault();
    isReg ? regService(authData) : loginService(authData);
  }
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        value={authData.email}
        onChange={(e) => setAuthData((prev) => ({ ...prev, email: e.target.value }))} />
      <input
        type="text"
        value={authData.password}
        onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))} />
      <input type="checkbox" checked={isReg} onChange={() => setIsReg(!isReg)} />
      <button>{isReg ? "sign up" : "sign in"}</button>
    </form>
  );
}