import React from "react";

import Search from "../Search";

import { Container, Seg, Name, Avatar, Bio, Nav, Menu } from "./styles";
import "./style.css";

interface Props {
  handleSearch(): void;
}

const Article: React.FC<Props> = ({ handleSearch }) => {
  return (
    <>
      <Search />
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
        <Menu>
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
        </Menu>
        <div className="footer">
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </Container>
    </>
  );
};

export default Article;
