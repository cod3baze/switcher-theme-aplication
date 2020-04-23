import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      Hello World!
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={42}
        handleDiameter={21}
        offColor={colors.primary}
        onColor={colors.text}
      />
    </Container>
  );
};

export default Header;
