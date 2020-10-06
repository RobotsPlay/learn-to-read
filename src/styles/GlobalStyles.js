import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  .button {
    background: lightskyblue;
    border: 3px solid #000;
    padding: 6px 12px;
    font-size: 2rem;
    border-radius: 8px;
    cursor: pointer;

    &-finish {
      background: goldenrod;
    }

    &[disabled] {
      opacity: .7;
    }

    svg {
      vertical-align: middle;
    }
  }
`

export default GlobalStyles
