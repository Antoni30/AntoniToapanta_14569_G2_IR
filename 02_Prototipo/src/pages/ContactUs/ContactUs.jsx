import { ContactForm } from "../../components/ContactForm/ContactForm";
import './ContactUs.css'

export function ContactUsPage() {
    return (
        <main>
            <header className="section__header">
                <h2>Contáctanos</h2>
            </header>
            <section className="section section__contact-us">
                <ContactForm />
            </section>
        </main>
    )
}