import "./App.css";
import Classes from "./Componets/Classes/Classes";
import Home from "./Componets/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassesInfo from "./Componets/Classes/ClassesInfo/ClassesInfo";
import Pricing from "./Componets/Pricing/Pricing";
import Membarship from "./Componets/Membarship/Membarship";
import Dashboard from "./Componets/Dashboard/Dashboard";
import AddClass from "./Componets/Dashboard/AddClass/AddClass";
import Loading from "./Componets/Loading/Loading";
import NotFound from "./Componets/NotFound/NotFound";
import MainDashboard from "./Componets/Dashboard/MainDashboard/MainDashboard";
import UserList from "./Componets/Dashboard/UserList/UserList";
import Login from "./Auth/Login/Login";
import Reginstration from "./Auth/Reginstration/Reginstration";
import { createContext, useState } from "react";
import PrivateRouter from "./Componets/PrivateRouter/PrivateRouter";
import AdminList from "./Componets/Admin/AdminList/AdminList";
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/classDetails/:classId"
            element={<ClassesInfo />}
          ></Route>
          <Route path="/classes" element={<Classes />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/membarship" element={<Membarship />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <MainDashboard />
              </PrivateRouter>
            }
          ></Route>
          <Route path="/addClass" element={<AddClass />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/mainDashboard" element={<MainDashboard />}></Route>
          <Route path="/registration" element={<Reginstration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userList" element={<UserList />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adminList" element={<AdminList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
