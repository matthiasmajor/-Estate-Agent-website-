import styled, { keyframes } from "styled-components";
import { CornerEffect } from "../../components/CornerEffectProvider/CornerEffect";

const TextHeroAnimation = keyframes`
 0% {
   opacity:0;
   transform:translateY(-20px);
 } 
 100% {
  opacity:1;
  transform:translateY(0px);
 }`;

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 90%;
  position: absolute;
  z-index: -1;
  top: 12%;
  right: 0;
  opacity: 0.7;

  ${({ theme }) => theme.mq.desktop} {
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 90%;
    position: absolute;
    z-index: -1;
    top: 13.5%;
    right: 0;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: yellow;

  p {
    font-weight: bold;
    margin: 0;
    padding: 0;
    letter-spacing: -0.4px;
    animation: ${TextHeroAnimation} 4s ease forwards;
  }
  h1 {
    margin-top: 10px;
    padding-top: 0;
    animation: ${TextHeroAnimation} 4s ease forwards;
    text-align: Center;
    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    overflow-y: hidden;

    h1 {
      letter-spacing: -1.08px;
      line-height: 60px;
      margin-top: 0;
      margin-bottom: 0px;
      font-size: ${({ theme }) => theme.font.size.heading};
    }
  }
`;

// ABOUT ME //

export const AboutMeSection = styled.section`
  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    background-color: #fff;
    width:1440px
    height: 1024px;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:100px;
    
    
  }
`;
export const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1460px;
    height: 100%;
    margin: 100px auto 0 auto;
  }
`;
export const Desktop2Child = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 993px;
    height: 161px;
  }
`;
export const CzymWyrniamSie = styled.h1`
  font-size: ${({ theme }) => theme.font.size.headingMobile};
  line-height: 48px;
  font-weight: 800;
  text-align: center;
  font-size: 2rem;

  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    letter-spacing: -0.02em;
    line-height: 48px;
    font-weight: 800;
    color: rgba(46, 43, 38, 1);
    display: inline-block;
    width: 786px;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.family.montserrat};

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    letter-spacing: -0.01em;
    line-height: 28px;
    padding: 0;

    font-weight: 700;
  }
`;
export const Text1 = styled.p`
  text-align: justify;
  font-size: ${({ theme }) => theme.font.size.thumbnailSmall};

  ${({ theme }) => theme.mq.desktop} {
    align-self: stretch;
    position: relative;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    margin-left: 15px;
    margin-top: 15px;
  }
`;
export const Feature5 = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 518px;
    height: 153px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
`;

export const Desktop2Inner = styled.span`
  ${({ theme }) => theme.mq.desktop} {
    background-color: ${({ theme }) => theme.color.beige};
    padding: 5px 10px;
    z-index: 0;
  }
`;
export const WOstatnichLatach = styled.h2`
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    font-size: 42px;
    letter-spacing: -0.02em;
    line-height: 48px;
    display: inline-block;
    text-align: center;
    width: 993px;
  }
`;

export const Feature51 = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 518px;
    height: 144px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    color: var(--color-gray-200);
  }
`;
export const FrameDiv = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 541px;
    height: 281px;
    overflow: hidden;
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: Center;
  justify-content: center;
  margin-top: 60px;
  img {
    width: 100%;
    height: auto;
    z-index: 0;
    opacity: 0.9;
  }
  ${({ theme }) => theme.mq.desktop} {
    margin: 0px 0px 0px 30px;
  }
`;

export const DetailInfo = styled.div`
  margin-top: 10px;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    gap: 10px;
    margin: 0px 0 60px 0;
    justify-content: center;
    padding: 0 20px;
    margin-top: 60px;
  }
`;
export const DetailInfoPrev = styled(CornerEffect)`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    margin-top: -20px;

    padding-left: 120px;
    padding-bottom: 300px;
  }
`;

// OFERTA //

export const Oferta = styled.section`
  height: 844px;
  width: 100%;
`;
export const OfertaWrapper = styled.div`
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Caption = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-fize:${({ theme }) => theme.font.size.caption}
  font-style: normal;
  font-weight: 400;
  text-align: center;
  padding:0
  margin:0;

  ${({ theme }) => theme.mq.desktop} {
    max-width:560px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 0px;
  }
`;

export const ImagesOfertaWrapper = styled.div`

margin:40px 0 20px 0;
display:flex;
flex-direction:column;
gap:20px;
max-height:1060px;
position:relative;



${({ theme }) => theme.mq.desktop} {
  max-height: 1040px;
  max-width: 1160px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1f 1fr;
  margin-top: 60px;
  grid-gap: 20px;
  position:relative;
  


  img:nth-child(1) {
    grid-column-start: 1;
    grid-row:start:1;
    grid-row-end: 2;
  }
  img:nth-child(2) {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 5;
  }
  img:nth-child(3) {
    grid-column-start: 2;
    grid-row-start:1;
    grid-row-end:span 2;
  }
  img:nth-child(4) {
    grid-column-start: 2;

    grid-row-start:3;
    grid-row-end:span 3;
  }
  img:nth-child(5) {
    grid-column-start: 3;
    grid-row-start:1;
    grid-row-end:span 2;
    
  }
  img:nth-child(6) {
    grid-column-start: 3;
    grid-row-start:2;
    grid-row-end:span 5;
  }
}
`;
export const ShowCaseCorner = styled(CornerEffect)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

export const ImagesOfertaBig = styled.div`
  height: 200px;
  width: 400px;
  background-color: yellow;
  ${({ theme }) => theme.mq.desktop} {
    height: 640px;
    width: 360px;
    background-color: yellow;
  }
`;
export const ImagesOfertaSmall = styled.img`
  height: 200px;
  width: 400px;
  ${({ theme }) => theme.mq.desktop} {
    width: 360px;
    height: ${({ isBig }) => (isBig ? "640px" : "360px")};
    object-fit: cover;
  }
`;
// DETAILINFOSERVICE //

export const DetailInfoService = styled.section`
  margin-top: 520px;
  padding: 0 20px 0 20px;
  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;

    max-width: 1160px;
    margin-top: 600px;
  }
`;
export const Div = styled.div`
  margin-top: 800px;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 650px;
  }
`;

export const DetailServiceTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  padding: 0;
  margin: 0;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 380px;
    font-weight: bold;
    margin-left: 20px;
    font-size: 40px;
  }
`;
export const DetailServiceCaption = styled.p`
  color: ${({ theme }) => theme.color.gray};
  ${({ theme }) => theme.mq.desktop} {
    text-align: justify;
    max-width: 400px;
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const Parent = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    max-width: 1100px;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 20px;
    margin-top: 100px;
  }
`;
export const ParentElement = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  padding-top: 40px;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;
    padding-top: 0px;
  }
`;
export const DetailServiceInfoTitle = styled.p`
  font-weight: bold;
  padding: 0;
  margin: 0;
  font-size: 1.7rem;

  ${({ theme }) => theme.mq.desktop} {
    font-weight: bold;
    padding: 0;
    margin: 0;
    text-align: left;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      right: 0px;
      top: -30px;
      background-color: ${({ theme }) => theme.color.lightGray};
    }
  }
`;

// CLIENT SECTION //

export const ClientsSection = styled.section`
  padding: 20px;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    margin: 60px auto;
    width: 1160px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ClientsInfoContainer = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    div:nth-child(3) {
      margin-right: 0;
    }
  }
`;
export const ClientsInfoChild = styled.div`
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 20px;

    margin-right: 40px;
    max-width: 360px;
    max-height: 368px;
    box-sizing: border-box;
  }
`;
export const ChildInsideContainer = styled.div`
  padding: 20px;
  ${({ theme }) => theme.mq.desktop} {
    padding: 20px;
  }
`;

export const ChildImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
`;
