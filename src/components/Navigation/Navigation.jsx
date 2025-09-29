import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import {
  OuterWrapper,
  StyledBurger,
  StyledNavigation,
  Wrapper,
  StyledSocialIcon,
} from "./Navigation.styles";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToogleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper id="nav">
      <p>
        <Link
          to="/"
          /* onClick={ToogleNavigation} */
          style={{ display: "block", whiteSpace: "nowrap" }}
        >
          Strona Główna
        </Link>
      </p>
      <StyledBurger onClick={ToogleNavigation}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledNavigation>
          <ul>
            <li>
              <Link onClick={ToogleNavigation} to="/Wspolpraca">
                Współpraca
              </Link>
            </li>
            {/* <li>
              <Link onClick={ToogleNavigation} to="/Oferta">
                Oferta
              </Link>
            </li> */}
            <li>
              <Link onClick={ToogleNavigation} to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Realizacje">
                Realizacje
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <div style={{}}>
          <StyledSocialIcon
            as="a"
            href="https://www.facebook.com/profile.php?id=100087245306747"
          >
            <FaFacebookSquare />
          </StyledSocialIcon>
          <StyledSocialIcon
            as="a"
            href="https://www.instagram.com/marcelodnieruchomosci/"
          >
            <FaInstagram />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
