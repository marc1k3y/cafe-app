import "./App.css";
import { useEffect, useState } from "react";
import { RouterService } from "./services/router";
import { $apiAuth } from "./services/http";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async function check() {
      $apiAuth.get("check")
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          setIsAuth(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuth(false);
        })
    })()
  }, [])

  return (
    <RouterService isAuth={isAuth} />
  );
}