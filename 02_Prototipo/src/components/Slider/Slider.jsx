import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { LinkButton } from "../LinkButton/LinkButton"
import PropTypes from 'prop-types'
import './Slider.css'

export function Slider({ sliders, id }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlider = () => {
        setCurrentIndex((currentIndex + 1) % sliders.length)
    }

    const previousSlider = () => {
        const previousIndex = currentIndex - 1
        setCurrentIndex(previousIndex >= 0 ? previousIndex : sliders.length - 1)
    }

    return (
        <div className="slider" id={`${id}_slider`}>
            <div className="slider__carrousel">
                {
                    sliders.map((sliderItem, index) => (
                        <article key={index} className="slider__item" style={{ translate: `${-100 * currentIndex}%` }}>
                            <img id={`${id}_image_${index}`} className="img slider__img" src={sliderItem.img} alt={sliderItem.alt} />
                            <header className="slider__info">
                                <h3 id={`${id}_slider_title_${index}`}>{sliderItem.title}</h3>
                                <p id={`${id}_slider_description_${index}`}>{sliderItem.description}</p>
                                <LinkButton id={`${id}_slider_view_more_${index}`} href={sliderItem.viewMore}>
                                    Ver más <FontAwesomeIcon icon={faArrowRight} className="icon icon--small" />
                                </LinkButton>
                            </header>
                        </article>
                    ))
                }
            </div>
            <button id={`${id}_slider_previous_button`} className="button-icon" onClick={previousSlider}>
                <FontAwesomeIcon icon={faArrowLeft} className="icon arrow arrow--left" />
            </button>
            <button id={`${id}_slider_next_button`} className="button-icon" onClick={nextSlider}>
                <FontAwesomeIcon icon={faArrowRight} className="icon arrow arrow--right" />
            </button>
            <div className="slider__dots">
                {
                    sliders.map((_, index) => (
                        <button id={`${id}_slider_circle_button_${index}`} className={index === currentIndex ? 'dot-button dot-button--active' : 'dot-button'} key={index} onClick={() => setCurrentIndex(index)}>
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
    })),
    id: PropTypes.string.isRequired
}