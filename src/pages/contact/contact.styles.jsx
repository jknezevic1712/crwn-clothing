import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  line-height: 1.5;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.3rem;
  }
`;

export const ContactContainer = styled.div`
  height: 90%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const ContactTitle = styled.div`
  height: 25%;
  width: 100%;
  text-align: center;
`;

export const ContactContent = styled.div`
  height: 25%;
`;

export const ContactIcons = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    a {
      height: 40%;
      width: auto;

      img {
        height: inherit;
        width: inherit;
      }
    }
  }

  @media (min-width: 768px) {
    span {
      a {
        height: 50%;
      }
    }
  }
`;
