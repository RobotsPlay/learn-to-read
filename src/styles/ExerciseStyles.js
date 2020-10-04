import styled from 'styled-components'

const ExerciseStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto auto;

    .frames {
        position: relative;
        z-index: 1;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    }

    .scores {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.6rem;
        transform: translateY(-100%);
        z-index: 2;
        margin-bottom: -4.4rem;

        &-dot {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 .8rem;
            color: rgba(0, 0, 0, .65);
            font-size: 1.4rem;
            transition: font-size .2s ease-in-out, background-color .2s ease-in-out;
            cursor: pointer;
            border-radius: .4rem;

        @media (max-width: 767px) {
            margin: 0 .2rem;
        }

        }

        .active {
            background-color: rgba(255, 255, 255, .6);
        }

        .correct {
            color: #006600;
            font-size: 2.4rem;
        }

        .incorrect {
            color: #990000;
            font-size: 2.4rem;
        }
    }
`;

export default ExerciseStyles;