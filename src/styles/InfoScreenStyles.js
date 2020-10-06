import styled from 'styled-components'

const InfoScreenStyles = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height; 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s ease-in-out .125s;
    z-index: 5;
    background: salmon;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.show {
        opacity: 1;
        pointer-events: all;
    }
`;

export default InfoScreenStyles;