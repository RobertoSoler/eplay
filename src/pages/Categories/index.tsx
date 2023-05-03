// import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 7,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description: 'REsident Evil4, conhecido no Japão',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
