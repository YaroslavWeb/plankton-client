import { Link } from 'react-router-dom'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      © 2021 Developed by
      <Link
        to={{ pathname: 'https://github.com/YaroslavWeb' }}
        target="_blank"
        style={{ marginLeft: 4 }}
      >
        YaroslavWeb
      </Link>
    </S.Footer>
  )
}
