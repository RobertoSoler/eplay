import { TagContainer } from './styles'

// criando uma tipagem...
// como vai utilizar no Tag container no styles tem que exportar tambem
export type Props = {
  size?: 'small' | 'big'
  children: string
}

// Se não tivesse o props...
// const Tag = () => (
//   <TagContainer>tag</TagContainer>
// )

// Opção
// const Tag = (Props) => (
//   <TagContainer>{props.children}</TagContainer>
// )

// Ou, desestruturando...
const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
