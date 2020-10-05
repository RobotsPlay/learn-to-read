import styled from 'styled-components'

const MobileKeyboardStyles = styled.div`
   display: none;
   flex-wrap: wrap;
   justify-content: center;
   margin: 1rem 2rem;

   @media (max-width: 767px) {
       display: flex;
   }

   .letter-key {
        background: rgba(255, 255, 255, .45);
        border: none;
        border-radius: 6px;
        padding: 4px;
        margin: 3px;
        font-size: 2.4rem;
        min-width: 3rem;
   }
`;

export default MobileKeyboardStyles;