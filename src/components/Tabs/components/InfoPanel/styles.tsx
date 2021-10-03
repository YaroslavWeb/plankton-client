import styled from 'styled-components'

export const Panel = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, minMax(212px, 1fr));
  gap: 12px;
`

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-top: 53px;
  height: 180px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

export const CardAvatar = styled.img`
  position: absolute;
  top: -32px;
  right: 50%;
  transform: translateX(50%);
  width: 50%;
  height: 90px;
  padding: 4px;
  background: ${({ theme }) => theme.colors.bg};
  border: 5px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 0 5px 5px;
`
