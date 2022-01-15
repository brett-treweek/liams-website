import { useState } from "react";
import { Snackbar, Alert, Box, TextField, Button, Slide } from "@mui/material";
import { StyledContact } from "./styles/Contact.styled";
import emailjs from "emailjs-com";

const houseStyles = [
  {
    value: "5 bed",
    label: "5 bedroom",
  },
  {
    value: "4 bed",
    label: "4 bedroom",
  },
  {
    value: "3 bed",
    label: "3 bedroom",
  },
  {
    value: "2 bed",
    label: "2 bedroom",
  },
  {
    value: "1 bed",
    label: "1 bedroom",
  },
];

const incomeBracket = [
  {
    value: ">90k",
    label: "over $90k",
  },
  {
    value: "60k-90k",
    label: "$60k-$90k",
  },
  {
    value: "30k-60k",
    label: "$30k-$60k",
  },
];

const Contact = () => {
  const [houseStyle, setHouseStyle] = useState("3 bed");
  const [income, setIncome] = useState("60k-90k");
  const [open, setOpen] = useState(false);

  const handleHouseStyleChange = (event) => {
    setHouseStyle(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r1o1bg2",
        "template_lff938p",
        e.target,
        "user_EUQIT1kNZJfWl6ouFWojf"
      )
      .then(
        (result) => {
          setOpen(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    console.log("you sucssefully submited email");
  };

  return (
    <StyledContact>
      <h1>Lets Get In Touch!</h1>

      <Box component="form" Validate onSubmit={sendEmail}>
        <TextField
          name="name"
          className="textField"
          label="Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          name="email"
          className="textField"
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
        />
        <TextField
          name="phone"
          className="textField"
          label="Phone Number"
          variant="outlined"
          fullWidth
          required
          type="text"
        />
        <TextField
          name="build_location"
          className="textField"
          label="Where would you like to build?"
          variant="outlined"
          fullWidth
          type="phone"
        />
        <TextField
          select
          name="bedrooms"
          className="textField"
          value={houseStyle}
          onChange={handleHouseStyleChange}
          variant="outlined"
          fullWidth
          SelectProps={{
            native: true,
          }}
          helperText="Optionally select size of house"
        >
          {houseStyles.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          select
          name="income"
          className="textField"
          value={income}
          onChange={handleIncomeChange}
          variant="outlined"
          fullWidth
          SelectProps={{
            native: true,
          }}
          helperText="Optionally provide income bracket"
        >
          {incomeBracket.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          name="message"
          className="textField"
          label="Any Questions?"
          rows={4}
          multiline
          fullWidth
        />

        <Button
          id="btn"
          className="textField"
          type="submit"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        transitionDuration={800}
        variant="filled"
        autoHideDuration={4000}
        TransitionComponent={Slide}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Slide direction="up">
          <Alert
            id="alert"
            variant="outlined"
            severity="success"
            onClose={handleClose}
          >
            Email Sent - Ill get back to you soon!
          </Alert>
        </Slide>
      </Snackbar>
    </StyledContact>
  );
};

export default Contact;
