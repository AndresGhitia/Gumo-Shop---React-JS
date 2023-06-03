import BrandLogo from '../BrandLogo/BrandLogo'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <header>
        <div className='ContainerLogo'>
          <Link to='/'> <BrandLogo /> </Link> 
        </div>
        <nav className='ContainerNavLinks'>
            <NavLink to={'/category/delayyreverb'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Delay/Reverb</NavLink>
            <NavLink to={'/category/modulacion'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Modulaciones</NavLink>
            <NavLink to={'/category/distorsion'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Distorsiones</NavLink>
        </nav>
                <div className='ContainerCart'>
            <CartWidget />
        </div>
    </header>
  )
}

export default NavBar