import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  children: string
  // este tipo é uma função vazia
  onClick?: () => void
}

// estrutura básica
// const Button = () => (
//   <div>
//     nome do botão
//   </div>
// )

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  // essa mesma div tem a função de botão e de link
  // se não for button, obrigatoriamente é link
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
