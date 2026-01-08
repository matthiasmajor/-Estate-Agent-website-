import * as React from "react";
import styled from "styled-components";
import HeroDesktopImage from "../images/HeroDesktop.jpg";
import {
  Wrapper,
  DetailInfo,
  DetailInfoPrev,
  Feature5,
  Title,
  Text1,
  ImageWrapper,
  WOstatnichLatach,
  Desktop2Inner,
  ImagesOfertaSmall,
  ImagesOfertaWrapper,
  ButtonWrapper,
  Caption,
  OfertaWrapper,
  Oferta,
  DetailInfoService,
  Div,
  DetailServiceCaption,
  Parent,
  ParentElement,
  DetailServiceInfoTitle,
  ShowCaseCorner,
  ClientsSection,
  ClientsInfoContainer,
  ClientsInfoChild,
  ChildInsideContainer,
  ChildImage,
} from "../styles/pages/homepage.styles";
import AboutMeSectionImage from "../images/indexpage.jpg";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Link } from "gatsby";
import { StyledButton } from "../components/ContactForm/ContactForm";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import gridOne from "../images/HousesPhotos/2_grid.jpg";
import gridTwo from "../images/HousesPhotos/3_grid.jpg";
import gridThird from "../images/HousesPhotos/4_grid.jpg";
import gridFourth from "../images/HousesPhotos/5_grid.jpg";
import gridFive from "../images/HousesPhotos/6_grid.jpg";
import gridSix from "../images/HousesPhotos/7_grid.jpg";
import face from "../images/face.jpg";
import { Hero } from "../components/HeroSection/HeroSection";
import { useLottie } from "lottie-react";
import writing from "../assets/animations/writing.json";
import smile from "../assets/animations/smile.json";
import Lottie from "lottie-react";
import { ThemeSwitch } from "../components/ThemeSwitch";
import SEO from "../components/Seo";

export const ContentWrapper = styled.div`
  margin-top: 90px;
`;
export const TitleWrappper = styled.div`
  text-align: center;
`;

const IndexPage = () => {
  const options = [
    {
      animationData: writing,
    },
    {
      animationData: smile,
    },
  ];

  const { View } = useLottie(options[0]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
  ];

  return (
    <ContentWrapper id="main">
      <SEO
        title={"strona główna"}
        description={
          "Agencja nieruchomości w Katowicach, Będzinie, SIEWIERZ. Pomagamy sprzedać, kupić i wynająć mieszkania oraz domy. Skutecznie, bezpiecznie i bez stresu."
        }
      />
      <ThemeSwitch />
      <Hero url={HeroDesktopImage} />
      <Wrapper>
        <HighlightedHeading width="70">
          Sprzedaż nieruchomości
        </HighlightedHeading>
        <DetailInfo>
          <DetailInfoPrev
            position="bottomLeft"
            color="beige"
            size="100px"
            distance="30px"
          >
            <Feature5>
              <Title>Sprzedając nieruchomość ze mną, otrzymasz:</Title>
              <Text1>
                {
                  "- Szybką, skuteczną sprzedaż, prowadzoną na wielu platformach, z którymi współpracujemy."
                }
              </Text1>
              <Text1>{"- Brak kar umownych."}</Text1>
              <Text1>
                {"- Prostą współpracę. Bez papierologii. Jedna kartka - umowa."}
              </Text1>
              <Text1>{"- BEZPŁATNĄ, dokładną wycenę nieruchomości."}</Text1>
              <Text1>
                {"- BEZPŁATNĄ sesję zdjęciową wraz z Home Staging."}
              </Text1>
              <Text1>
                {"- Doradztwo kredytowe dla zainteresowanych klientów."}
              </Text1>
              <Title>
                A w trakcie trwania całego procesu sprzedaży - pomoc 7 dni w
                tygodniu.
              </Title>
            </Feature5>
          </DetailInfoPrev>

          <ImageWrapper>{View}</ImageWrapper>
        </DetailInfo>
        <WOstatnichLatach style={{ textAlign: "center", marginTop: "120px" }}>
          W ostatnich latach udało mi się nawiązać{" "}
          <Desktop2Inner>współpracę z wieloma</Desktop2Inner> klientami, i
          sprzedać wiele mieszkań. Bądź jednym z wielu zadowolonych klientów.
        </WOstatnichLatach>
      </Wrapper>

      <Oferta>
        <OfertaWrapper>
          <HighlightedHeading>Moja oferta</HighlightedHeading>
          <Caption>
            W mojej ofercie każdy znajdzie coś dla siebie. Mieszkanie dla
            singla, młodego małzeństwa czy też rodziny z dziećmi? Nie ma
            problemu. Znajdę. Mieszkanie inwestycyjne? Również w ofercie. A
            jeśli nie, zadzwoń do mnie, na pewno mam coś co Cię zainteresuje.
          </Caption>
          <ButtonWrapper>
            <StyledButton as={Link} to="/Kontakt">
              Kontakt
            </StyledButton>
            <StyledButton as={Link} to="/Realizacje">
              Ostatnie realizacje
            </StyledButton>
          </ButtonWrapper>
          <ImagesOfertaWrapper>
            <ImagesOfertaSmall src={gridOne} />
            <ImagesOfertaSmall isBig src={gridTwo} />
            <ImagesOfertaSmall isBig src={gridThird} />
            <ImagesOfertaSmall src={gridFourth} />
            <ImagesOfertaSmall src={gridFive} />
            <ImagesOfertaSmall isBig src={gridSix} />
            <ShowCaseCorner
              position="topLeft"
              size="100px"
              distance="30px"
              color="beige"
            />
            <ShowCaseCorner
              isHidden
              position="bottomRight"
              size="100px"
              distance="30px"
              color="dark"
            />
          </ImagesOfertaWrapper>
        </OfertaWrapper>
      </Oferta>
      <DetailInfoService>
        <Div>
          <HighlightedHeading width="68" maxWidth="380">
            Kompleksowa usługa, od początku do końca!
          </HighlightedHeading>
          <DetailServiceCaption>
            Zajmę sie wszystkim od początku do końca, proste reguły, żadnych
            znaków zapytania, pełen profesjonalizm. Przekonaj się sam.
          </DetailServiceCaption>
        </Div>
        <Parent>
          <ParentElement>
            <DetailServiceInfoTitle>
              Indywidalne podejście
            </DetailServiceInfoTitle>
            <DetailServiceCaption>
              Do każdego klienta podchodzę indywidualnie, zależy mi, aby nasza
              współpraca przebiegła na jak najwyższym poziomie
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Zaangażowanie</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Wierzę, że starania i poświęcenie to droga do udanej współpracy.
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Doświadczenie</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Działam na rynku nieruchomości już kilka lat, wiem czego oczekują
              ode mnie klienci.
            </DetailServiceCaption>
          </ParentElement>
          <ParentElement>
            <DetailServiceInfoTitle>Bezpieczeństwo</DetailServiceInfoTitle>
            <DetailServiceCaption>
              Wybierając moją ofertę masz pewność, że transakcja przebiegnie
              bezpiecznie dla obu stron.
            </DetailServiceCaption>
          </ParentElement>
        </Parent>
      </DetailInfoService>
      <ClientsSection>
        <HighlightedHeading width="37" isRight>
          Co mówią moi klienci?
        </HighlightedHeading>
        <ClientsInfoContainer>
          <ClientsInfoChild>
            <ChildInsideContainer>
              <Lottie
                style={{ width: "60px", height: "60px", marginBottom: "5px" }}
                animationData={smile}
                loop={true}
              />
              <DetailServiceInfoTitle>Pan Adrian</DetailServiceInfoTitle>

              <DetailServiceCaption style={{ color: "black" }}>
                "Profesjonalista, mieszkanie sprzedane od ręki, nabywcy również
                zadowoleni, dobry kontakt z Panem Marcelem, bardzo pomocna
                osoba, usługa godna polecenia."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>

          <ClientsInfoChild>
            <ChildInsideContainer>
              <Lottie
                style={{ width: "60px", height: "60px", marginBottom: "5px" }}
                animationData={smile}
                loop={true}
              />
              <DetailServiceInfoTitle>Pani Natalia</DetailServiceInfoTitle>
              <DetailServiceCaption style={{ color: "black" }}>
                " Tak szybkiej transakcji się nigdy bym nie spodziewała. Zależy
                ci na szybkiej sprzedaży to dobrze trafiłeś. POLECAM POLECAM
                POLECAM!!!!!!! I pięknie dziękuję z owocną współpracę."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>

          <ClientsInfoChild>
            <ChildInsideContainer>
              <Lottie
                style={{ width: "60px", height: "60px", marginBottom: "5px" }}
                animationData={smile}
                loop={true}
              />
              <DetailServiceInfoTitle>Pani Beata</DetailServiceInfoTitle>

              <DetailServiceCaption style={{ color: "black" }}>
                "Jestem bardzo zadowolona z pracy Pana Marcela polecam… wszystko
                robi z dokładnością i precyzją. Pozdrawiam."
              </DetailServiceCaption>
            </ChildInsideContainer>
          </ClientsInfoChild>
        </ClientsInfoContainer>
      </ClientsSection>
      <TitleWrappper>
        <HighlightedHeading>Napisz do mnie!</HighlightedHeading>
      </TitleWrappper>

      <ContactForm />
    </ContentWrapper>
  );
};
export default IndexPage;
