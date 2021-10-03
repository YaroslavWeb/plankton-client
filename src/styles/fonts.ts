import { css } from 'styled-components'

import OswaldExtraLight from 'assets/fonts/Oswald/Oswald-ExtraLight.ttf'
import OswaldLight from 'assets/fonts/Oswald/Oswald-Light.ttf'
import OswaldRegular from 'assets/fonts/Oswald/Oswald-Regular.ttf'
import OswaldMedium from 'assets/fonts/Oswald/Oswald-Medium.ttf'
import OswaldBold from 'assets/fonts/Oswald/Oswald-Bold.ttf'
import OswaldSemiBold from 'assets/fonts/Oswald/Oswald-SemiBold.ttf'

export default css`
  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldExtraLight}) format('truetype');
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldLight}) format('truetype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: 'Oswald';
    src: url(${OswaldSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }
`
