import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Main from "./layout/Main.js";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import {
  hotelInputs,
  productInputs,
  roomInputs,
  userInputs,
} from "./formSource.js";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";

import { hotelColumns, roomColumns, userColumns } from "./dataTableSource.js";
import NewHotel from "./pages/newHotel/NewHotel.jsx";
import NewRoom from "./pages/newRoom/NewRoom.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="login" element={<Login />} />
      <Route index element={<Home />} />
      <Route path="users">
        <Route index element={<List columns={userColumns} />} />
        <Route path=":userId" element={<Single />} />
        <Route
          path="new"
          element={<New inputs={userInputs} title="Add new user" />}
        />
      </Route>
      <Route path="hotels">
        <Route index element={<List columns={hotelColumns} />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<NewHotel />} />
      </Route>
      <Route path="rooms">
        <Route index element={<List columns={roomColumns} />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<NewRoom />} />
      </Route>
    </Route>
  )
);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
