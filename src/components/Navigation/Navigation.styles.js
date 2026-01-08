import styled from "styled-components";
import { StyledIcon } from "../StyledIcon/StyledIcon";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px;
  overflow-y: hidden;

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    gap: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 0;
  }
`;
export const OuterWrapper = styled.div`
  p {
    z-index: 1000;
    a {
      text-decoration: none;
      font-family: ${({ theme }) => theme.font.family.cormorant};
      font-size: 2rem;
      color: black;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0%;
  z-index: 10001;
  list-style: none;
  font-family: ${({ theme }) => theme.font.family.cormorant};

  ${({ theme }) => theme.mq.desktop} {
    p {
      margin-left: 100px;
    }
  }
`;
export const StyledBurger = styled.button`
  position: relative;
  top: 3%;
  right: 2rem;
  justify-content: space-around;
  width: 5px;
  height: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  height: unset;

  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: flex;
    margin-bottom: 3px;
    width: 25px;
    height: 5px;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledSocialIcon = styled(StyledIcon)`
  z-index: 1001;
  color:black;
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0 20px;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    /* margin: 0 15px; */
    padding: 0;
    /* background-color: yellow; */
    display: flex:
    align-items:center;
    font-size:2rem;
    color:black;
    margin-top:2px
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    text-align: center;
    padding: 20px;
    margin-top: 80px;
    
  }
  li {
    
    a {
      display: inline-block;
      padding: 25px 0;
      text-decoration: none;
      color:black;
      &:hover {
        opacity:0.7;
      }
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    li {
      font-family:${({ theme }) => theme.font.family.cormorant};
      
      a {
        padding: 0;
        text-decoration: none;
        color:black;
        font-family:${({ theme }) => theme.font.family.cormorant};
        font-size:2rem;

      }
    }
  }
}
${({ theme }) => theme.mq.desktop} {
  margin-left: auto;
  
  
  ul {
    display: flex;
    margin:0;
    font-family:${({ theme }) => theme.font.family.cormorant};
    
    
    li {
      margin: 0 20px;
      font-family:${({ theme }) => theme.font.family.cormorant};
    }
  }
}
`;
