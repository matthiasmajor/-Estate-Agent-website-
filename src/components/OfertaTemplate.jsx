import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { HighlightedHeading } from "./HighlightedHeading/HighlightedHeading";
import area from "../assets/icons/area.svg";
import availability from "../assets/icons/availability.svg";
import blocks from "../assets/icons/blocks.svg";
import building from "../assets/icons/building-type.svg";
import key from "../assets/icons/key.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiArea } from "react-icons/bi";
import { BiKey } from "react-icons/bi";
import { LuSquareStack } from "react-icons/lu";
import { BiBuildings } from "react-icons/bi";

export const Wrapper = styled.div`
  margin-top: 160px;
`;

export const Gallery = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }
  ${({ theme }) => theme.mq.desktop} {
    img {
      object-fit: contain;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
  grid-gap: 20px;
`;

export const Left = styled.div`
  h3 {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100px;
      height: 1px;
      left: 0px;
      bottom: 0px;
      background-color: black;
    }
  }
`;
export const Right = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-weight: Bold;
    }
    p:nth-of-type(2) {
      font-weight: 500;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const OfertaTemplate = ({ data: { oferta } }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Wrapper>
      <Gallery>
        <Carousel responsive={responsive}>
          {oferta.galeria.map((e) => (
            <img src={e.url} />
          ))}
        </Carousel>
      </Gallery>
      <WrapperContent>
        <Left>
          <h3>{oferta.miasto}</h3>
          <HighlightedHeading width="50">{oferta.tytul}</HighlightedHeading>
          <p
            dangerouslySetInnerHTML={{
              __html: oferta.opis.childMarkdownRemark.html,
            }}
          />
        </Left>
        {/* <Right>
          <div>
            <BiBuildings />
            <p>Typ Budynku</p>
            <p>{oferta.typBudynku}</p>
          </div>
          <div>
            <LuSquareStack />
            <p>Pomieszczenia</p>
            <p>{oferta.pomieszczenia}</p>
          </div>
          <div>
            <BiKey />
            <p>Dostepność</p>
            <p>{oferta.dostpno}</p>
          </div>
          <div>
            <BiArea />
            <p>Powierzchnia:</p>
            <p>{oferta.powierzchnia}</p>
          </div>
        </Right> */}
      </WrapperContent>
    </Wrapper>
  );
};

export const query = graphql`
  query ($id: String) {
    oferta: contentfulOfertyNieruchmosci(id: { eq: $id }) {
      tytul
      adres
      category
      opis {
        childMarkdownRemark {
          html
        }
      }
      galeria {
        url
      }
      tytul
      miasto
    }
  }
`;

export default OfertaTemplate;
