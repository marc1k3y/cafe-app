import { Routes, Route } from "react-router-dom";
import { AuthModule } from "../../modules/auth";
import { MenuModule } from "../../modules/menu";

export const RouterService = ({ isAuth }) => {
  return (
    <Routes>
      {isAuth
        ? <Route path="*" element={<MenuModule />} />
        : <Route path="*" element={<AuthModule />} />}
    </Routes>
  );
}