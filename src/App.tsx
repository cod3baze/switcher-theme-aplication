import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Article from "./components/Article";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleSearch = async () => {
    fetch("https://api.github.com/eliasallex").then((dt) => {});
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Article handleSearch={handleSearch} />
      </div>
    </ThemeProvider>
  );
};

export default App;
