import Button from "@mui/material/Button";
import { StyledContact } from "./styles/Contact.styled";


const Contact = () => {
  return (
    <StyledContact>
      <div>
        <h1>Get in Touch</h1>
      </div>
      <div>
        <form action="#">
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Please enter your Name"
          />

          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Please enter your Email"
          />

          <label htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            cols="50"
            rows="20"
            placeholder="Please message me"
          />

          <Button type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </div>
    </StyledContact>
  );
};

export default Contact;
