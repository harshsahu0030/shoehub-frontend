import { useState } from "react";
import { form_data } from "../data/form";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  //state
  const [toggleButton, setToggleButton] = useState("login");

  const [loginForm, setLoginForm] = useState({
    phoneCode: "+91",
    phoneNo: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    username: "",
    phoneCode: "+91",
    phoneNo: "",
    password: "",
  });

  //function
  const hangleToggle = (text) => {
    setToggleButton(text);
  };

  const handleChangeLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleChangeSignup = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    console.log(signupForm);
  };

  return (
    <div className="login_signup_container">
      <div className="top">
        <span
          className={toggleButton === "login" ? "active" : "unactive"}
          onClick={() => hangleToggle("login")}
        >
          LOGIN
        </span>
        <span
          className={toggleButton === "signup" ? "active" : "unactive"}
          onClick={() => hangleToggle("signup")}
        >
          SIGNUP
        </span>
      </div>

      <hr />

      <div className="wrapper">
        {toggleButton === "login" ? (
          <form className="login_form" onSubmit={loginSubmit}>
            <div className="input_select_container">
              <label htmlFor="">PhoneNo *</label>

              <div>
                <select
                  name="phoneCode"
                  value={loginForm.phoneCode}
                  onChange={handleChangeLogin}
                >
                  <option value={"+91"}>+91</option>
                  {form_data &&
                    form_data.countriesWithCode
                      .sort((a, b) =>
                        a.code > b.code ? 1 : b.code > a.code ? -1 : 0
                      )
                      .map((item, i) => (
                        <option key={i} value={`+${item.code}`}>
                          {item.code}
                        </option>
                      ))}
                </select>
                <input
                  type="Number"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={loginForm.phoneNo}
                  onChange={handleChangeLogin}
                />
              </div>
            </div>

            <div className="input_single_container">
              <label htmlFor="">Password *</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={loginForm.password}
                onChange={handleChangeLogin}
              />
            </div>
            <button type="submit">LOGIN</button>
            <span>Forgot Password ?</span>
          </form>
        ) : (
          <form className="signup_form" onSubmit={signupSubmit}>
            <div className="input_single_container">
              <label htmlFor="username">Username *</label>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={signupForm.username}
                onChange={handleChangeSignup}
              />
            </div>
            <div className="input_select_container">
              <label htmlFor="phoneCode">PhoneNo *</label>

              <div>
                <select
                  name="phoneCode"
                  value={signupForm.phoneCode}
                  onChange={handleChangeSignup}
                >
                  <option value={"+91"}>91</option>

                  {form_data &&
                    form_data.countriesWithCode
                      .sort((a, b) =>
                        a.code > b.code ? 1 : b.code > a.code ? -1 : 0
                      )
                      .map((item, i) => (
                        <option key={i} value={`+${item.code}`}>
                          {item.code}
                        </option>
                      ))}
                </select>
                <input
                  type="Number"
                  placeholder="Enter phone number"
                  name="phoneNo"
                  value={signupForm.phoneNo}
                  onChange={handleChangeSignup}
                />
              </div>
            </div>

            <div className="input_single_container">
              <label htmlFor="">Password *</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={signupForm.password}
                onChange={handleChangeSignup}
              />
            </div>

            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <Link to="/">privacy policy</Link>
              .
            </p>
            <button type="submit">SIGNUP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
