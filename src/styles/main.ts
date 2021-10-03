import { css } from 'styled-components'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  table {
    margin: 0;
  }
`
