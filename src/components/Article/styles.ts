import styled from "styled-components";

/*
  bg : #f6f8fa
  cntBg: #dceaf7
  name: #000
  bio: #0e0e0e
  menuBG: #f25
*/

export const Container = styled.div`
  width: 600px;
  height: 300px;

  background-color: #dceaf7;
  border-radius: 4px;

  padding: 5px;
`;

export const Seg = styled.p`
  color: #fff;
`;

export const Name = styled.strong`
  color: #000;
  line-height: 20px;
`;

export const Bio = styled.div`
  margin: 15px 0 0 30px;

  p {
    line-height: 20px;
    color: #0e0e0e;
  }
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
