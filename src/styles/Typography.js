import { createGlobalStyle } from 'styled-components'

import robotoLight from '../assets/fonts/roboto-light.woff2'
import alphaSlabOne from '../assets/fonts/alpha-slab-one.woff2'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${robotoLight}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Alfa Slab One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${alphaSlabOne}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    font-size: 62.5%;
  }

  body {
    font-size: 2rem;
    line-height: 1.5;
  }
`

export default Typography
