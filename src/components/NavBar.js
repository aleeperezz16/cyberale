import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar className='teal darken-1' alignLinks='right' brand={<Link to='/' className='brand-logo'>Cyberale</Link>} centerChildren>
      <Link to='/category/perifericos'>Periféricos</Link>
      <Link to='/category/componentes-pc'>Componentes de PC</Link>
      <Link to='/category/monitores'>Monitores</Link>
      <CartWidget count={4} />
    </Navbar>
  )
}

export default NavBar;