import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="Vaše jméno..." type="text" name="name" />
        <input placeholder="Váš e-mail..." type="email" name="email" />
        <textarea
          placeholder="Vaše zpráva..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Odešli zprávu" />
      </form>
    </ContactStyles>
  )
}

export default Contact
