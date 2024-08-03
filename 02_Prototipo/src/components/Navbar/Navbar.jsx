import { LinkButton } from '../LinkButton/LinkButton'
import './Navbar.css'

export function Navbar() {
    return (
        <header className='navbar'>
            <h1 className='logo'><a className='link' href='/'>NEOStudio</a></h1>
            <ul className='menu'>
                <li><LinkButton href='/products'>Productos</LinkButton></li>
                <li><LinkButton href='/services'>Servicios</LinkButton></li>
                <li><LinkButton href='/projects'>Proyectos</LinkButton></li>
                <li><LinkButton href='/about_us'>Conócenos</LinkButton></li>
                <li><LinkButton href='/contact_us'>Contáctanos</LinkButton></li>
            </ul>
        </header>
    )
}