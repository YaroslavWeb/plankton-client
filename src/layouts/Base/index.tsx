import { PropsWithChildren } from 'react'

import * as S from './styles'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const BaseLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <S.Layout>
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Layout>
  )
}
