import {
  ReactElement,
  PropsWithChildren,
  useCallback,
  useState,
  ChangeEventHandler,
} from 'react'

import * as S from './styles'

interface SelectProps {
  children: ReactElement[]
  name: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  placeholder: string
  value: string
  error?: string | null
}

export const Select = ({
  children,
  name,
  onChange,
  placeholder,
  value,
  error,
}: SelectProps) => {
  const [isBlur, setBlur] = useState<boolean>(true)

  const onFocusSelect = useCallback(() => {
    setBlur(false)
  }, [])

  const onBlur = useCallback(() => {
    setBlur(true)
  }, [])

  const isError = Boolean(error)
  const isNotSelected = value === '' && isBlur
  const randomName = name || String(Math.random())

  return (
    <S.SelectWrapper isBlur={isBlur} isError={isError}>
      <S.SelectLabel isNotSelected={isNotSelected}>{placeholder}</S.SelectLabel>
      <S.Select
        name={randomName}
        value={value}
        onChange={onChange}
        onFocus={onFocusSelect}
        onBlur={onBlur}
        isBlur={isBlur}
        isError={isError}
      >
        <S.Option disabled value="" style={{ display: 'none' }} />
        {children}
      </S.Select>
      {error ? <span>{error}</span> : null}
    </S.SelectWrapper>
  )
}

interface OptionProps {
  value: string
}

export const Option = ({ children, value }: PropsWithChildren<OptionProps>) => {
  return <S.Option value={value}>{children}</S.Option>
}
