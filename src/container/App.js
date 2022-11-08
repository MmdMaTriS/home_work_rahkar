import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Loading from "../layouts/Loading";
import { app_routes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppLoading } from "../store/reducers/appSlice";
import Cookies from "js-cookie";

function App() {
  const LoadingStatus = useSelector((state) => state.appReducer.loading);
  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  //* --> Handle Check User Cookie And Access Pages
  useEffect(() => {
    const token = Cookies.get("AccessToken");
    if (typeof token === "string") {
      if (location.pathname === "/") {
        Navigate("/main", { replace: true });
      }
    } else {
      if (location.pathname !== "/") {
        Navigate("/", { replace: true });
      }
    }
    setTimeout(() => {
      dispatch(toggleAppLoading(false));
    }, 1500);
  }, [Cookies, location]);
  return (
    <div>
      {LoadingStatus && <Loading />}
      <Routes>
        {app_routes.map((ctx, idx) => {
          return <Route key={idx} path={ctx.path} element={ctx.elemnt} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
