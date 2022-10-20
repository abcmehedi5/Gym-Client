import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { userContext } from "../../App";
import Navbar from "../../Componets/Home/Header/Navbar/Navbar";
import "./Login.css";
const Login = () => {
  const [loginChange, setLoginChange] = useState({});
  // user context
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // spinner loading
  const [spinner, setSpinner] = useState(false);

  // handle change login form
  const handleChange = (e) => {
    const LoginChangeCopy = { ...loginChange };
    LoginChangeCopy[e.target.name] = e.target.value;
    setLoginChange(LoginChangeCopy);
  };

  //private route
  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // handle login submit
  const handleLoginSubmit = (e) => {
    setSpinner(true);
    e.preventDefault();
    fetch("http://localhost:5000/userLogin/loggedIn", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginChange),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          swal({
            title: "Worng..",
            text: `${data.error}`,
            icon: "warning",
            dangerMode: true,
            button: "OK",
          });

          setSpinner(false);
        } else if (data.passwordError) {
          setSpinner(false);

          swal({
            title: "Worng..",
            text: `${data.passwordError}`,
            icon: "warning",
            dangerMode: true,
            button: "OK",
          });
        } else {
          // user all data set context api
          setLoggedInUser(data.data);
          from && history(from.pathname);
          setSpinner(false);
          // alert swal
          swal({
            title: "Done",
            text: `${data.success}`,
            icon: "success",
            dangerMode: true,
            button: "OK",
          });
        }
      });
  };
  return (
    <div className="LoginWrapper">
      <Navbar />
      <form
        method="POST"
        onSubmit={handleLoginSubmit}
        className="formContainerLogin"
      >
        <h1 className="logo mb-5" style={{ color: "white" }}>
          {" "}
          POWER <span style={{ color: "#FCD842" }}>X</span>
        </h1>
        <input
          className="form-control mb-4 "
          type="text"
          required
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="form-control mb-4 "
          type="password"
          required
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button
          type="submit"
          className="btn-brand mb-2"
          style={{ width: "100%", borderRadius: "5px" }}
        >
          {" "}
          {spinner && (
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Login{" "}
        </button>
        <p style={{ color: "white" }}>Forget Password</p>
        <p style={{ color: "white" }}>
          need an account? <Link to="/registration">SING UP</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
