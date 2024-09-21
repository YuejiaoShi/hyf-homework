import { TextField, Button } from "@mui/material";

function SignUpForm() {
  return (
    <form className="mt-10 p-6 w-3/5 bg-white shadow-md rounded-lg">
      <div>
        <TextField
          required
          id="first-name"
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
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
