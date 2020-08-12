import React from "react";

import { Container, Navigation, DropBoxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
  function toogleMenu() {
    if (window.toogleActiveMenu) window.toogleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropBoxLogo />
          <span>DropBox</span>
        </h1>

        <button className="action-close" onClick={toogleMenu}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário a baixo.</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="SobreNome" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Politica de privacidade e aos termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
