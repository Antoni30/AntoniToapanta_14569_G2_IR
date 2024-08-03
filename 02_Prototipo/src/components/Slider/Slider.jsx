import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { LinkButton } from "../LinkButton/LinkButton"
import PropTypes from 'prop-types'
import './Slider.css'

export function Slider({ sliders }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlider = () => {
        setCurrentIndex((currentIndex + 1) % sliders.length)
    }

    const previousSlider = () => {
        const previousIndex = currentIndex - 1
        setCurrentIndex(previousIndex >= 0 ? previousIndex : sliders.length - 1)
    }

    return (
        <div className="slider">
            <div className="slider__carrousel">
                {
                    sliders.map((sliderItem, index) => (
                        <article key={index} className="slider__item" style={{ translate: `${-100 * currentIndex}%` }}>
                            <img className="img slider__img" src={sliderItem.img} alt={sliderItem.alt} />
                            <header className="slider__info">
                                <h3>{sliderItem.title}</h3>
                                <p>{sliderItem.description}</p>
                                <LinkButton href={sliderItem.viewMore}>
                                    Ver más <FontAwesomeIcon icon={faArrowRight} className="icon icon--small" />
                                </LinkButton>
                            </header>
                        </article>
                    ))
                }
            </div>
            <button className="button-icon" onClick={previousSlider}>
                <FontAwesomeIcon icon={faArrowLeft} className="icon arrow arrow--left" />
            </button>
            <button className="button-icon" onClick={nextSlider}>
                <FontAwesomeIcon icon={faArrowRight} className="icon arrow arrow--right" />
            </button>
            <div className="slider__dots">
                {
                    sliders.map((_, index) => (
                        <button className={index === currentIndex ? 'dot-button dot-button--active' : 'dot-button'} key={index} onClick={() => setCurrentIndex(index)}>
                            &nbsp;
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

Slider.propTypes = {
    sliders: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        viewMore: PropTypes.string.isRequired
    }))
}