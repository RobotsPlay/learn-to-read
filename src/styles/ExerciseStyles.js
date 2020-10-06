import styled from 'styled-components'

const ExerciseStyles = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto auto;
    transition: background-color .3s ease-in-out;

    .frames {
        position: relative;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        max-width: 800px;
    }

    .scores {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.6rem;

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

    .instruction {
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight; 700;
        max-width: 700px;
        text-align: center;
    }
`;

export default ExerciseStyles;