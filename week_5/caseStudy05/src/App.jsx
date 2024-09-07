import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import FormValidationExample from "./FormValidationExample";
import "./App.css";

function App() {
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      const passwordsMatch =
        updatedData.password === updatedData.confirmPassword;
      // Check if passwords match after state update
      setIsPasswordSame(passwordsMatch);
      // Check if all fields are filled after state update
      const allFieldsFilled = Object.values(updatedData).every(Boolean);
      setIsSubmitButtonEnabled(allFieldsFilled && passwordsMatch);
      return updatedData;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // Clear the input fields
    Array.from(event.target).forEach((input) => {
      input.value = "";
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required={true}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required={true}
        />
        {!isPasswordSame && formData.confirmPassword !== "" ? ( // Show error only if confirm password is not empty
          <p>Passwords do not match.</p>
        ) : null}
        <button
          type="submit"
          disabled={!isSubmitButtonEnabled}
          className={isSubmitButtonEnabled ? "enabled" : "disabled"}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
