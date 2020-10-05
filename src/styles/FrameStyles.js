import styled from 'styled-components'

const FrameStyles = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity .3s ease-in-out;

    &.active {
        z-index: 2;
        opacity: 1;
    }

    .frame-image {
        width: 40rem;
        max-height: 30rem;
        max-width: 80%;
        margin-bottom: 8rem;
        pointer-events: none;

        @media (max-width: 767px) {
            width: 20rem;
            margin-bottom: 4rem;
        }


        img {
            display: block;
            width: 100%;
            max-height: 100%;
        }
    }
`;

export default FrameStyles;