import React from "react";

import {
  Container,
  Content,
  HeaderWraper,
  Header,
  DropBoxLogo,
} from "./styles";

interface Props {
  variant: "blue" | "beige" | "white" | "black";
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ title, variant, description }) => {
  const buttonVariant = Math.round(Math.random());

  function toogleMenu() {
    if (window.toogleActiveMenu) window.toogleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWraper>
        <Header>
          <h1>
            <DropBoxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={toogleMenu}>
            {buttonVariant === 0 ? "Acessar" : "Interagir"}
          </button>
        </Header>
      </HeaderWraper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
