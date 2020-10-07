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
        max-height: 20rem;
        max-width: 80%;
        margin-bottom: 6rem;
        pointer-events: none;

        @media (max-width: 767px) {
            width: 20rem;
            margin-bottom: 3rem;
        }


        img {
            display: block;
            width: 100%;
            max-height: 100%;
        }
    }

    .drag-letters {
        display: flex;
        justify-content: center;
    }

    .drag-letter {
        display: inline-block;
        width: 70px;
        font-size: 6.2rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        line-height: 1;
        background: rgba(255, 255, 255, .5);
        border-radius: 6px;
        text-align: center;
        padding-bottom: 6px;
        margin: 0 12px;

        @media (max-width: 767px) {
            font-size: 4rem;
            width: 60px;
        }
    }
`;

export default FrameStyles;