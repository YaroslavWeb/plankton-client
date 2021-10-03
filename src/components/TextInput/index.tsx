import { ChangeEventHandler, FocusEventHandler } from 'react'
import * as S from './styles'

export interface InputTextProps {
  name?: string
  type?: 'text' | 'tel' | 'email' | 'number'
  placeholder: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  value: string
  maxLength?: number
  min?: number
  max?: number
  error?: string | null
}

export const InputTextComponent = (props: InputTextProps) => {
  const {
    name,
    onChange,
    onBlur,
    disabled,
    value,
    type = 'text',
    maxLength,
    min,
    max,
    placeholder,
    error,
  } = props

  const randomName = name || String(Math.random())
  return (
    <S.InputText isError={Boolean(error)}>
      <input
        type={type}
        value={value}
        name={randomName}
        id={randomName + '_id_field'}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      <label htmlFor={randomName + '_id_field'}>{placeholder}</label>
      {error ? <span>{error}</span> : null}
    </S.InputText>
  )
}

export const TextInput = InputTextComponent
