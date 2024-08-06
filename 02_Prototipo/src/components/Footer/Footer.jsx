import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { LinkButton } from "../LinkButton/LinkButton"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <LinkButton id="logo_link" href="/"><h2 className='logo'>NEOStudio</h2></LinkButton>
            <ul className='menu'>
                <li><LinkButton id="footer_facebook_link" href='https://www.facebook.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookF} /></LinkButton></li>
                <li><LinkButton id="footer_tiktok_link" href='https://www.tiktok.com/en/' target="_blank"><FontAwesomeIcon className="icon" icon={faTiktok} /></LinkButton></li>
                <li><LinkButton id="footer_whatsapp_link" href='https://web.whatsapp.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></LinkButton></li>
                <li><LinkButton id="footer_instagram_link" href='https://www.instagram.com/' target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></LinkButton></li>
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