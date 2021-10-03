export interface IFormField<K extends string> {
  value: string
  error: string
  name: K
}

export type IForm<T> = {
  [K in keyof T & string]: IFormField<K>
}

export interface IInitialForm {
  [key: string]: string
}
