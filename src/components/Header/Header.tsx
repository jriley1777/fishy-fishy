import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs({
    className: 'Header'
})`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const Header = ({ children }: any) => {
    return (
        <StyledHeader>{ children }</StyledHeader>
    )
};

export default Header;