import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { LinkButton } from "../LinkButton/LinkButton"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <h2 className='logo'><a className='link' href='/'>NEOStudio</a></h2>
            <ul className='menu'>
                <li><LinkButton href='https://www.facebook.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookF} /></LinkButton></li>
                <li><LinkButton href='https://www.tiktok.com/en/' target="_blank"><FontAwesomeIcon className="icon" icon={faTiktok} /></LinkButton></li>
                <li><LinkButton href='https://web.whatsapp.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></LinkButton></li>
                <li><LinkButton href='https://www.instagram.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></LinkButton></li>
            </ul>
            <span className="footer__item">
                <FontAwesomeIcon className="icon" icon={faEnvelope} /> neostudio@gmail.com
            </span>
            <span className="footer__item">
                <FontAwesomeIcon className="icon" icon={faLocationDot} /> <address>Calle A y Calle B, Quito, Ecuador</address>
            </span>
            <span>
                Copyright &copy; 2024. All Rights Reserved.
            </span>
        </footer>
    )
}