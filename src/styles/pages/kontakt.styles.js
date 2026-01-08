import styled from "styled-components";

export const ContentWrapper = styled.section`
  margin-top: 60px;
  padding: 20px;

  ${({ theme }) => theme.mq.desktop} {
    width: 1160px;
    margin: 100px auto 20px auto;
  }
`;
export const Container = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    align-items: center;
    grid-gap: 50px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-column: 1/2;
    justify-content: left;
  }
`;
export const Right = styled.div`
  grid-column: 2/2;
`;
export const Image = styled.img`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    height: 700px;
    width: 110%;
    object-fit:cover;
    margin-top:80px;
`;
export const ContactFormWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    margin-left: -200px;
  }
`;
