import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 300px;

  margin: 0 auto;

  background-color: ${(props) => props.theme.colors.cntBg};
  border-radius: 4px;

  padding: 5px;
`;

export const Seg = styled.p`
  color: #fff;
`;

export const Name = styled.strong`
  color: ${(props) => props.theme.colors.name};
  line-height: 20px;
`;

export const Bio = styled.div`
  margin: 15px 0 0 30px;

  p {
    line-height: 20px;
    color: ${(props) => props.theme.colors.bio};
  }
`;

export const Menu = styled.div`
  display: grid;
  gap: 20;
  grid-template-columns: repeat(3, 1fr);

  background: ${(props) => props.theme.colors.menuBG};
  border-radius: 4px;
  margin: 20px 0;
  padding: 5px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 6px;
    width: 140px;
    height: 140px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;
