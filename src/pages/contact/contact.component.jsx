import React from "react";

import EmailIcon from "../../assets/mail.png";
import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";

import {
  Contact,
  ContactContainer,
  ContactTitle,
  ContactContent,
  ContactIcons,
} from "./contact.styles";

const ContactPage = () => {
  return (
    <Contact>
      <ContactContainer>
        <ContactTitle>
          <h1>Contact</h1>
        </ContactTitle>

        <ContactContent>
          <p>
            Feel free to contact me via e-mail or through LinkedIn and check out
            my GitHub if you wish to know more about me and my projects.
          </p>
        </ContactContent>

        <ContactIcons>
          <span>
            <a href="mailto:knezevic.jakov@gmail.com">
              <img src={EmailIcon} alt="E-mail icon" />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="Github icon" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/jknezevic1712/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn icon" />
            </a>
          </span>
        </ContactIcons>
      </ContactContainer>
    </Contact>
  );
};

export default ContactPage;
