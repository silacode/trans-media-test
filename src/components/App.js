import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import CheckBox from "./CheckBox.js";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const user = { email: email, password: password };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      let response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("Successfully Logged In.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>Sign in</div>
      <form onSubmit={onFormSubmit} action="/" method="post">
        <Input
          label="Email"
          type="email"
          value={email}
          onInputChange={onEmailChange}
          minLength="3"
          maxLength="30"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onInputChange={onPasswordChange}
          min="8"
          max="30"
        />
        <CheckBox label="Remember me?" />
        <Button name="Sign in" />
      </form>

      <div>
        <div>
          <a href="/">Forgot Your Password?</a>
        </div>
        <div>
          Don't have an account? <a href="/">Sign up</a>
        </div>
        <div>
          <a href="/">Resend email confirmation</a>
        </div>
      </div>
    </div>
  );
};

export default App;
