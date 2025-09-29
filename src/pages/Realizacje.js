import React from "react";
import { Caption } from "../styles/pages/homepage.styles";
import { Button } from "../components/Buttons/Button";
import { Content } from "../components/Content/Content";
import { useState, useEffect } from "react";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { graphql } from "gatsby";
import {
  ContentWrapper,
  ButtonSection,
  ImageSection,
} from "../styles/pages/oferta.styles";
import { TitleWrappper } from "./index";
import { useCity } from "../hooks/useCity";
import { LocalizationButtons } from "../components/LocalizationButtons/LocalizationButtons";

const Realizacje = (
  {
    /* data: {
    miasto: { nodes: miasto = [] },
  }, */
  }
) => {
  const { oferta, setOferta } = useCity();
  const [house, setHouse] = useState(oferta);
  const [active, setActive] = useState("Sprzedaż");

  const activeButton = (city) => {
    setActive(city);
  };
  console.log(oferta);
  /* useEffect(() => {
    const List = oferta.filter((e) => e.category === "Sprzedaż");
    setHouse(List);
  }, []); */

  const handleDirection = (direction) => {
    setHouse(oferta);
    const LastHouses = oferta.filter((e) => e.category === direction);
    setHouse(LastHouses);
  };

  return (
    <ContentWrapper>
      <TitleWrappper>
        <HighlightedHeading width="60">Realizację</HighlightedHeading>
      </TitleWrappper>
      <Caption>Ostatnie realizację</Caption>

      {/* <ButtonSection>
        <Button
          isActive={active}
          buttonName={"Sprzedaż"}
          onClick={() => {
            handleDirection("Sprzedaż");
            activeButton(`Sprzedaż`);
          }}
        >
          Sprzedaż
        </Button>

        <Button
          isActive={active}
          buttonName={"Wynajem"}
          onClick={() => {
            handleDirection("Wynajem");
            activeButton(`Wynajem`);
          }}
        >
          Wynajem
        </Button>
      </ButtonSection> */}
      <ImageSection Layout>
        {house.length > 0 ? (
          house.map((oferta) => (
            <Content
              key={oferta.id}
              id={oferta.id}
              url={oferta.galeria[0].url}
              name={oferta.adres}
              desc={oferta.opis.opis}
              category={oferta.category}
              addres={oferta.adres}
              title={oferta.tytul}
            />
          ))
        ) : (
          <p style={{ fontWeight: "bold", textAlign: "center" }}>Brak.</p>
        )}
      </ImageSection>
    </ContentWrapper>
  );
};

/* export const query = graphql`
  query {
    miasto: allContentfulMiasta {
      nodes {
        miasto
      }
    }
  }
`; */

export default Realizacje;
