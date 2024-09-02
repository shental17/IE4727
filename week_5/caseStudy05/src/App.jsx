import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import FormValidationExample from "./FormValidationExample";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
  };

  return (
    <>
      <form onSubmit={validateFormInput}>
        <p className="label">Username </p>
        <input
          value={formData.username}
          onChange={({ target }) => {
            handleUserInput(target.username, target.value);
          }}
          name="username"
          type="text"
          className="input"
          placeholder="username"
        />

        <p className="label">Email</p>
        <input
          value={formData.email}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
          name="email"
          type="email"
          className="input"
          placeholder="example@gmail.com"
        />

        <p className="label">Password</p>
        <input
          value={formData.password}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />

        <p className="label">Confirm Password</p>
        <input
          value={formData.confirmPassword}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
          name="confirmPassword"
          type="password"
          className="input"
          placeholder="Confirm Password"
        />

        <input type="submit" className="btn" value="Submit" />
      </form>
    </>
  );
}

export default App;
