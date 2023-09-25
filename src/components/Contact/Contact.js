/** @format */

import * as React from "react";
import Button from "../Button/Button";
import { ContactStyles } from "./ContactStyles";

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input placeholder="Vaše jméno..." type="text" name="first_name" />
        <input placeholder="Váš e-mail..." type="email" name="email" />
        <textarea
          placeholder="Vaše zpráva..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Odešli zprávu" type="submit" />
      </form>
    </ContactStyles>
  );
};

export default Contact;
