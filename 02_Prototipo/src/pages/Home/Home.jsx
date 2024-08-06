import { Slider } from '../../components/Slider/Slider'
import './Home.css'
import sliderPresentation from './../../mocks/pages/home/presentation.json'
import slidersProducts from './../../mocks/pages/home/products.json'
import sliderServices from './../../mocks/pages/home/services.json'
import slidersProjects from './../../mocks/pages/home/projects.json'

export function HomePage() {

  return (
    <main>
      <div className='presentation'>
        <Slider id='presentation' sliders={sliderPresentation} />
      </div>
      <section className='section'>
        <header className='section__header'>
          <h3>Productos</h3>
        </header>
        <div className='products'>
          {
            slidersProducts.map((slider, index) => (
              <Slider id={`products_${index}`} key={index} sliders={slider} />
            ))
          }
        </div>
      </section>
      <section className='section services'>
        <header className='section__header'>
          <h3>Servicios</h3>
        </header>
        <Slider id='services' sliders={sliderServices} />
      </section>
      <section className='section'>
        <header className='section__header'>
          <h3>Proyectos</h3>
        </header>
        <div className='projects'>
          {
            slidersProjects.map((slider, index) => (
              <Slider id={`projects_${index}`} key={index} sliders={slider} />
            ))
          }
        </div>
      </section>
    </main>
  )
}