import React from "react";
import GlobalStyle from "./styles/GlobalStyle";

import Section from "./components/Section";
import SideMenu from "./components/SideMenu";

import Data from "./data";
import MenuForm from "./components/MenuForm";

const src: React.FC = () => {
  return (
    <>
      <Section
        variant="blue"
        title={Data[0].title}
        description={Data[0].description}
      />
      <Section
        variant="beige"
        title={Data[1].title}
        description={Data[1].description}
      />
      <Section
        variant="blue"
        title={Data[2].title}
        description={Data[2].description}
      />
      <Section
        variant="white"
        title={Data[3].title}
        description={Data[3].description}
      />
      <Section
        variant="black"
        title={Data[4].title}
        description={Data[4].description}
      />
      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyle />
    </>
  );
};

export default src;
