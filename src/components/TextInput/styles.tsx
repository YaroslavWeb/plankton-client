import styled from 'styled-components'
import theme from 'styles/theme'

interface StyledInputTextProps {
  isError: boolean
}

export const InputText = styled.div<StyledInputTextProps>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin: 20px 0 22px 0;
  color: ${({ theme }) => theme.colors.font};
  cursor: text;

  input {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 4px;
    border: none;
    border-bottom: 1px solid
      ${({ isError, theme }) =>
        isError ? theme.colors.error : theme.colors.font};
    transition: 0.3s ease border-bottom-color;
    background-color: transparent;
    color: inherit;
    outline: 0;

    ::placeholder {
      color: transparent !important;
      opacity: 0 !important;
    }

    :focus {
      border-bottom-color: ${(props) =>
        props.isError ? theme.colors.error : theme.colors.primary};
    }

    :not(:placeholder-shown),
    :focus {
      & ~ label {
        top: -16px;
        font-size: 12px;
        outline: none;
        line-height: 16px;
        transform: translateY(0);
        color: ${({ isError, theme }) =>
          isError ? theme.colors.error : theme.colors.font};
      }
    }

    :disabled {
      border-bottom-color: ${theme.colors.primaryLight};
    }
  }

  & > label {
    position: absolute;
    left: 0;
    top: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.font};
    pointer-events: none;

    transition-property: color, top, font-size;
    transition-duration: ${({ theme }) => theme.durations.default}ms;
    transition-timing-function: ease;
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
