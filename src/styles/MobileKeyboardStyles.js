import styled from 'styled-components'

const MobileKeyboardStyles = styled.div`
   display: none;
   flex-wrap: wrap;
   justify-content: center;
   margin: .5rem 2rem;

   @media (max-width: 767px) {
       display: flex;
   }

   .letter-key {
        background: rgba(255, 255, 255, .45);
        border: none;
        border-radius: 6px;
        padding: 4px;
        margin: 3px;
        font-size: 2rem;
        min-width: 3.4rem;
        text-transform: uppercase;
   }
`;

export default MobileKeyboardStyles;