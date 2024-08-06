import './AboutUs.css'

export function AboutUsPage() {
    return (
        <main>
            <header className="section__header">
                <h2>Conócenos</h2>
            </header>
            <section className="section section__about-us">
                <header className="section__header">
                    <h3>Misión</h3>
                    <p className='section__description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam deserunt rem, ducimus laborum est error autem alias facilis reiciendis ad quas, maxime provident ullam ab explicabo excepturi nisi. Optio.
                    </p>
                </header>
                <img id="about_us_mission_img" className="img section__img" src="https://www.strategy-business.com/media/image/44639082_thumb6_1180x670.jpg" alt="imagen representativa de la mision de la empresa" />
            </section>
            <section className="section section__about-us">
                <img id="about_us_vision_img" className="img section__img" src="https://bernardmarr.com/img/How%20Do%20You%20Write%20an%20Amazing%20Vision%20Statement.png" alt="imagen representativa de la visión de la empresa" />
                <header className="section__header">
                    <h3>Visión</h3>
                    <p className='section__description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam deserunt rem, ducimus laborum est error autem alias facilis reiciendis ad quas, maxime provident ullam ab explicabo excepturi nisi. Optio.
                    </p>
                </header>
            </section>
            <section className="section">
                <header className="section__header">
                    <h3>Nuestra historia</h3>
                </header>
                <p className='section__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam deserunt rem, ducimus laborum est error autem alias facilis reiciendis ad quas, maxime provident ullam ab explicabo excepturi nisi. Optio.
                </p>
                <img id="about_us_history_img" className="img section__img" src="https://www.familybusinesscenter.com/wp-content/uploads/2019/09/family-business-facts.jpg" alt="imagen representativa de la historia de la empresa" />
            </section>
        </main>
    )
}