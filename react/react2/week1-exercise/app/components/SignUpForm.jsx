"use client";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function SignUpForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const router = useRouter();

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const refs = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    email: emailRef,
    phoneNumber: phoneNumberRef,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = {};
    for (let key in refs) {
      formData[key] = refs[key].current.value;
    }

    console.log(formData);
    router.push("/");
  };

  const handleFocusNext = (e, nextRef) => {
    if (e.key === "Enter" && e.target.value) {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  const validateForm = () => {
    const fieldValues = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };

    const newErrors = {
      firstName: !fieldValues.firstName ? "This field is required." : "",
      lastName: !fieldValues.lastName ? "This field is required." : "",
      email: "",
      phoneNumber: "",
    };

    // email validation
    if (!fieldValues.email) {
      newErrors.email = "This field is required.";
    } else {
      newErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    }

    // Phone number validation
    if (!fieldValues.phoneNumber) {
      newErrors.phoneNumber = "This field is required.";
    } else {
      newErrors.phoneNumber = /^\d{10}$/.test(fieldValues.phoneNumber)
        ? ""
        : "Phone number is not valid.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  return (
    <form
      className="mt-10 p-6 w-3/5 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          inputRef={firstNameRef}
          required
          id="first-name"
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          onKeyDown={(e) => handleFocusNext(e, lastNameRef)}
        />
        <TextField
          inputRef={lastNameRef}
          required
          id="last-name"
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          onKeyDown={(e) => handleFocusNext(e, emailRef)}
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
          error={Boolean(errors.email)}
          helperText={errors.email}
          onKeyDown={(e) => handleFocusNext(e, phoneNumberRef)}
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
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber}
          onKeyDown={(e) => handleFocusNext(e, null)}
        />
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        className="mt-4 bg-indigo-900"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
