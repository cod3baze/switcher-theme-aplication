import styled from "styled-components";

export const Input = styled.input`
  position: absolute;
  top: 13px;
  left: 20px;
  height: 30px;
  width: 320px;

  font-size: 16px;
  line-height: 10px;

  border-radius: 6px;
  border: 1px solid black;
  padding: 0 10px;
`;

export const Button = styled.button`
  :hover {
    opacity: 0.8;
    color: #fff;
  }

  position: absolute;
  top: 13px;
  left: 350px;

  outline: 0;
  border: 0;
  cursor: pointer;
  color: #ffb86c;
  background: #6272a4;

  border-radius: 6px;
  font-size: 14px;
  width: 70px;
  height: 30px;
`;
