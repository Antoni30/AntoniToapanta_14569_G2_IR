import { LinkButton } from '../LinkButton/LinkButton'
import './Navbar.css'

export function Navbar() {
    return (
        <header className='navbar'>
            <h1 className='logo'><a className='link' href='/'>NEOStudio</a></h1>
            <ul className='menu'>
                <li><LinkButton id='navbar_products_link' href='/products'>Productos</LinkButton></li>
                <li><LinkButton id='navbar_services_link' href='/services'>Servicios</LinkButton></li>
                <li><LinkButton id='navbar_projects_link' href='/projects'>Proyectos</LinkButton></li>
                <li><LinkButton id='navbar_about_us_link' href='/about_us'>Conócenos</LinkButton></li>
                <li><LinkButton id='navbar_contact_us_link' href='/contact_us'>Contáctanos</LinkButton></li>
            </ul>
        </header>
    )
}