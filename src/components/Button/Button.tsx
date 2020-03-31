import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({
  className: "Button"
})`
  // height: 1.5rem;
  font-size: 1.25rem;
  padding: 10px;
  border-radius: 50px;
  width: 20vw;
  background: white;
  position: absolute;
  top: 45vh;
  left: 40vw;
  outline: none;
  border: none;
  box-shadow: 1px 1px 5px black;

  &:active {
    background: #ddd;
    box-shadow: 1px 1px 2px black;
  }
`;

interface ButtonTypes {
    onClick: (...args: any) => any,
    children?: React.ReactNode
}

const Button: React.FC<ButtonTypes> = ({ onClick, children }) => {
  return (
    <StyledButton
      onClick={ onClick }>
      { children }
    </StyledButton>
  )
};

export default Button