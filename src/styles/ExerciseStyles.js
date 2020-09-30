import styled from 'styled-components'

const ExerciseStyles = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;

    .frames {
        position: relative;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    }
`;

export default ExerciseStyles;