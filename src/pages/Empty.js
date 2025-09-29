import React from "react";
import { Item } from "../components/Realizacje/Item";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ContentWrapper, Container } from "../styles/pages/realizacje.styles";
import { Items } from "../data/lib";
import { TitleWrappper } from "./index";

const Empty = () => {
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
    <ContentWrapper>
      <TitleWrappper>
        <HighlightedHeading noPadding width="60">
          Dotychczasowe realizacje
        </HighlightedHeading>
      </TitleWrappper>
      <Container>
        <Carousel infinite={true} responsive={responsive}>
          {Items.map((e) => (
            <Item key={e.id} title={e.title} url={e.url} />
          ))}
        </Carousel>
      </Container>
    </ContentWrapper>
  );
};

export default Empty;
