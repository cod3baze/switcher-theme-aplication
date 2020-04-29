import React from "react";

import { Container, Seg, Name, Avatar, Bio, Nav } from "./styles";
import "./style.css";

interface Props {
  handleSearch(): void;
}

const Article: React.FC<Props> = ({ handleSearch }) => {
  return (
    <Container>
      <Nav>
        <Avatar>
          <img
            id="avatar"
            src="https://avatars2.githubusercontent.com/u/35645590?v=4"
            alt="Avatar"
          />
        </Avatar>
        <Bio>
          <Name>Elias allex</Name>
          <p>Programador das tecnologias em volta da linguagem JS.</p>
        </Bio>
      </Nav>
      <div className="menu-group">
        <Seg>
          Seguidores <strong>123</strong>
        </Seg>
        <Seg>
          {" "}
          Seguindo <strong>5345</strong>
        </Seg>
        <Seg>
          Repos <strong>869</strong>
        </Seg>
      </div>
      <div className="footer">
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </Container>
  );
};

export default Article;
