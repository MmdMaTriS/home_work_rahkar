//# Pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

export const app_routes = [
  { title: "login", path: "/", elemnt: <Login />, need_token: false, auth_layout: true },
  { title: "main", path: "/main", elemnt: <Main />, need_token: true, auth_layout : false },
  { title: "notfound", path: "*", elemnt: <NotFound />, need_token: false, auth_layout : false }
];
