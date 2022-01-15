import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { StyledContact } from "./styles/Contact.styled";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";

const Contact = () => {
  // const successAlert = () => {
  //   return (

  //   );
  // };

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
          // successAlert();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    console.log("you submited email");
  };

  return (
    <StyledContact>
      <div>
        <h1>Lets get in touch</h1>
      </div>
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
          type="phone"
        />
        <TextField
          name="message"
          className="textField"
          label="Message"
          rows={4}
          multiline
          fullWidth
          required
        />
        <Button
          className="textField"
          type="submit"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Box>
      {/* <Alert id="alert" variant="outlined" severity="success">
        Email Sent - Ill get back soon!
      </Alert> */}
    </StyledContact>
  );
};

export default Contact;
