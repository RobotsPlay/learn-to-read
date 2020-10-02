import styled from 'styled-components'

const WordStyles = styled.div`
    .word {
        font-size: 14.2rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        line-height: 1;
        display: flex;
        justify-content: space-around;
        margin: 1.6rem 0;
    }

    .letter-input {
        border: 6px dashed rgba(0, 0, 0, .5);
        background: none;
        font-size: 14.2rem;
        text-transform: uppercase;
        text-align: center;
        margin: 0 .6rem;
        width: auto;
        max-width: 16rem;
        transform: translateY(-10px);
        transition: border-color .15s ease-in-out;

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
`;

export default WordStyles;