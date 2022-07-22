import styled from "styled-components";

export const Contact = styled.div``;

export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 10% 30% 60%;
  place-items: center;
`;

export const ContactTitle = styled.div``;

export const ContactContent = styled.div``;

export const ContactIcons = styled.div`
  width: 100%;
  height: 100%;
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
`;
