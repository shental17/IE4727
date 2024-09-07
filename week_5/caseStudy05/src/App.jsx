import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import FormValidationExample from "./FormValidationExample";
import "./App.css";

function App() {
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //setting up state variable errors to manage form validation errors
  const [errors, setErrors] = useState({});

  //handleChange function is used to update the formData state based on the user input in the form fields
  const handleChange = (event) => {
    //extract the name (input fields) and value (user input) from the event target
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedData = {
        //use ... spread operator to optain the existing data in formData and update the specific input field with the new value
        ...prevData,
        [name]: value,
      };
      // Check if passwords match after state update
      const passwordsMatch =
        updatedData.password === updatedData.confirmPassword;
      //Check if password is at least 6 characters
      const passwordLength = formData.password.length >= 6;
      setPasswordsMatch(passwordsMatch);
      setPasswordLength(passwordLength);
      // Check if all fields are filled after state update
      const allFieldsFilled = Object.values(updatedData).every(Boolean);
      setIsSubmitButtonEnabled(
        allFieldsFilled && passwordsMatch && passwordLength
      );
      return updatedData;
    });
  };

  //handleSubmit function is used to validate the form data when the form is submitted
  const handleSubmit = (event) => {
    //Prevent the default form submission behaviour
    //Check each form field for validation errors based on the defined criteria
    event.preventDefault();
    alert("Form has been submitted successfully!");
    console.log(formData);
    // Clear the input fields
    event.target.reset();
    // Reset the formData state to clear the form fields
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsSubmitButtonEnabled(false);
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
        {!/\S+@\S+\.\S+/.test(formData.email) && formData.email.trim() ? (
          <p>Email is not valid</p>
        ) : null}
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        {!passwordLength && formData.password.trim() ? (
          <p>Password should have at least 6 characters</p>
        ) : null}
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required={true}
        />
        {!passwordsMatch && formData.confirmPassword.trim() ? ( // Show error only if confirm password is not empty
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
