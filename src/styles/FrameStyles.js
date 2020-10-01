import styled from 'styled-components'

const FrameStyles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
        z-index: 2;
    }

    .word {
        font-family: 'Alfa Slab One', sans-serif;
        font-size: 10.2rem;
        text-transform: uppercase;
        letter-spacing: .6rem;
    }
`;

export default FrameStyles;