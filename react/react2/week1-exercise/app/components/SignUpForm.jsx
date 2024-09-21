"use client";
import { TextField, Button } from "@mui/material";
import { useRef } from "react";

function SignUpForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const refs = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    email: emailRef,
    phoneNumber: phoneNumberRef,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    for (let key in refs) {
      formData[key] = refs[key].current.value;
    }

    console.log(formData);
  };

  return (
    <form className="mt-10 p-6 w-3/5 bg-white shadow-md rounded-lg">
      <div>
        <TextField
          inputRef={firstNameRef}
          required
          id="first-name"
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          inputRef={lastNameRef}
          required
          id="last-name"
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          inputRef={emailRef}
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          inputRef={phoneNumberRef}
          required
          id="phone-number"
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="primary"
        className="mt-4"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
