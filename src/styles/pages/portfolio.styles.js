import styled from "styled-components";
import { CornerEffect } from "../../components/CornerEffectProvider/CornerEffect";

export const ContentWrapper = styled.section`
  margin-top: 100px;
  padding: 20px;
  ${({ theme }) => theme.mq.desktop} {
    width: 1360px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 20px auto;
    justify-content: center;
  }
`;
export const MainTitle = styled.h2`
  text-align: center;
  font-size: 4.2rem;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const BackgroundDiv = styled.span`
  background: #eaf4fa;

  height: 75px;
  transform: rotate(45deg);
  padding: 5px 10px;
`;

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    margin-top: 100px;
    align-items: start;
  }
`;
export const Left = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    grid-column: 1/2;
    grid-row: 1/1;
    margin-top: -15px;
  }
`;
export const LeftWrapper = styled.div``;

export const Right = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
`;
export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;
export const Caption = styled.p`
  /*  color: #848484; */
  text-align: justify;
  max-width: 520px;
  display: flex;
  gap: 10px;
  margin-left: -10px;
  padding: 0px 15px;
  ${({ theme }) => theme.mq.desktop} {
    padding: 0px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  clip-path: ellipse(500px 450px at 40% 0%);
  ${({ theme }) => theme.mq.desktop} {
    height: 800px;
  }
`;
export const Description = styled.p`
  text-align: center;
`;
