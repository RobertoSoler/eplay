import Product from '../Product'
import Game from '../../models/Game'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  // depois que foi criado o Game lá no models
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
