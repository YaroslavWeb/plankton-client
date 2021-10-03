import { FlattenSimpleInterpolation } from 'styled-components'

export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation
}
