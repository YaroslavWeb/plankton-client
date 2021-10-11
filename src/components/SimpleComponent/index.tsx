// Инлайн стили
export const SimpleComponent = () => {
  <div style={{backgroundColor: '#fcba03', borderRadius: 5}}>
    <h1 style={{fontWeight: 300}}>
      Simple Component
    </h1>
    <p style={{borderTop: '1px solid #69d6db'}}>
      I am just a simple component
    </p>
  </div>
}

// _______________________________

// Стилизованные компоненты
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fcba03;
  border-radius: 5px;
`
const Title = styled.h1`
  font-weight: 300;
`
const Text = styled.p`
  border-top: 1px solid #69d6db;
`

export const StyledComponent = () => {
  <Container>
    <Title>Styled Component</Title>
    <Text>I am styled component!</Text>
  </Container>
}