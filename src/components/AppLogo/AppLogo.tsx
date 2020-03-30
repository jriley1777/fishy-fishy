import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h1.attrs({
    className: 'AppLogo'
})`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 40px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 40px;
    color: white;
    pointer-events: none;

    @media (min-width: 768px) {
        font-size: 70px;
        right: 70px;
    }
`;

interface ALType {
    children: any
}

const AppLogo: React.FC<ALType> = ({ children }) => {
    return (
        <StyledText>{ children }</StyledText>
    )
};

export default AppLogo;