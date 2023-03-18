import { useEffect, useState } from "react";
import "./App.css";
import { RouterService } from "./services/router";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => setIsAuth(true), [])
  return (
    <RouterService isAuth={isAuth} />
  );
}