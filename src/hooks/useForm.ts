import { ChangeEvent, useCallback, useState } from 'react'

import { IForm, IInitialForm } from 'interfaces/form'

const convertToForm = <T extends IInitialForm>(initialForm: T): IForm<T> =>
  Object.entries(initialForm).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        value,
        error: '',
        name: key,
      },
    }
  }, {} as IForm<T>)

/*
 * Form control hook
 * @param {object} initialForm - initial values for inputs
 * @param {function} handler - the handler that should be triggered after validation form
 *
 * @returns:
 * {object} form - initialForm with additional parameters: value, name, error
 * {function} onSubmit - activates the handler after validation
 * {function} onChange - changes the value of a field by name
 * {function} cleanUp - clears form values
 */
//
export const useForm = <T extends IInitialForm>(
  initialForm: T,
  handleSubmit
) => {
  const [form, setForm] = useState<IForm<T>>(convertToForm(initialForm))

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({
        ...prev,
        [target.name]: { ...prev[target.name], value: target.value },
      }))
    },
    []
  )

  const validate = useCallback((fields) => {
    let isError = false

    for (const key in fields) {
      const value = fields[key].value

      if (!value.trim()) {
        fields[key].error = 'Invalid value'
        isError = true
      } else {
        fields[key].error = ''
      }
    }

    setForm(fields)
    return isError
  }, [])

  const onSubmit = useCallback(() => {
    const fields = { ...form }
    const isError = validate(fields)

    if (isError) return

    const values = Object.entries(fields).reduce(
      (acc, [key, { value }]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    )

    handleSubmit(values)
  }, [form, handleSubmit, validate])

  const cleanUp = useCallback(() => {
    const fields = Object.entries(form).reduce(
      (acc, [key, values]) => ({
        ...acc,
        [key]: {
          ...values,
          value: '',
          error: '',
        },
      }),
      {} as IForm<T>
    )
    setForm(fields)
  }, [form])

  return { form, onSubmit, onChange, cleanUp }
}
