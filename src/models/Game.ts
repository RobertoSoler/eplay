class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    titulo: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = titulo
  }
}

export default Game
// category="Ação"
// description="teste"
// image="//placehold.it/222x250"
// infos={['-10%', 'R$ 150,00']}
// system="Windows"
// title="Nome do Jogo"
