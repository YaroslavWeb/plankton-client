import styled from 'styled-components'

interface SelectProps {
  isBlur: boolean
  isError: boolean
}

export const SelectWrapper = styled.div<SelectProps>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0 22px 0;
  cursor: pointer;
  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 8px;
    right: 4px;
    top: 10px;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);

    transition: ${({ theme }) => theme.durations.default}ms ease
      background-color;
    background-color: ${({ isBlur, isError, theme }) =>
      isError
        ? theme.colors.error
        : isBlur
        ? theme.colors.font
        : theme.colors.primary};
  }

  & > span {
    position: absolute;
    top: 37px;
    left: 0;
    color: ${({ isError, theme }) =>
      isError ? theme.colors.error : theme.colors.black};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`

export const SelectLabel = styled.label<{ isNotSelected: boolean }>`
  position: absolute;
  outline: 0;
  line-height: 16px;
  transition-property: color, top, font-size;
  transition-duration: ${({ theme }) => theme.durations.default}ms;
  transition-timing-function: ease;

  top: ${({ isNotSelected }) => (isNotSelected ? '0' : '-16px')};
  font-size: ${({ isNotSelected }) => (isNotSelected ? '16px' : '12px')};
`

export const Select = styled.select<SelectProps>`
  width: 100%;
  padding-bottom: 4px;
  padding-right: 8px;
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;
  transition: ${({ theme }) => theme.durations.default}ms ease
    border-bottom-color;
  outline: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid
    ${({ isBlur, isError, theme }) =>
      isError
        ? theme.colors.error
        : isBlur
        ? theme.colors.font
        : theme.colors.primary};

  &::-ms-expand {
    display: none;
  }
`

export const Option = styled.option`
  cursor: pointer;
`
