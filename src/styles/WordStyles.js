import styled from 'styled-components'

const WordStyles = styled.div`
    .word {
        font-size: 14.2rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        line-height: 1;
        display: flex;
        justify-content: center;
        margin: 1.6rem 0;
        position: relative;

        @media (max-width: 767px) {
            font-size: 6rem;
        }

        [data-rbd-placeholder-context-id] {
            position: absolute;
        }
    }

    .letter-input {
        border: .6rem dashed rgba(0, 0, 0, .5);
        border-radius: 3.5rem;
        font-size: 14.2rem;
        text-transform: uppercase;
        text-align: center;
        margin: 0 .6rem;
        width: 16rem;
        height: 15.4rem;
        transform: translateY(.0375em);
        transition: border-color .15s ease-in-out;

        span {
            transform: translateY(-.075em);
            display: inline-block;
        }

        @media (max-width: 767px) {
            font-size: 6rem;
            width: 8rem;
            height: 7.6rem;
            border-radius: 1.5rem;
            transform: translateY(-.0625em);

            span {
                transform: translateY(-.025em);
            }
        }

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        &:focus {
            outline: 0;
            border-color: rgba(0, 0, 0, .75)
        }

        &.correct {
            border-color: green;
        }

        &.incorrect {
            border-color: red;
        }
    }

    .speech-button {
        position: absolute;
        top: 0;
        left: 100%;
        background: none;
        border: none;
        color: rgba(0, 0, 0, .75);
        cursor: pointer;
        font-size: 3.2rem;

        * {
            pointer-events: none;
    
        
        &:hover {
            color: #000;
        }
    }
`;

export default WordStyles;