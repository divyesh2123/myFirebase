import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRoute from "./components/UserRoute";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import Header from "./components/Header";
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import View from "./pages/View";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
  
    <>
      
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route  path="/" element={<RequireAuth> <Home/></RequireAuth> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/addContact" element={ <RequireAuth><AddEdit/></RequireAuth>} />
          <Route path="/update/:id" element={<RequireAuth><AddEdit/></RequireAuth>} />
          <Route path="/view/:id" element={<RequireAuth><View/></RequireAuth>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
   


        </>
  
  );
}

export default App;
