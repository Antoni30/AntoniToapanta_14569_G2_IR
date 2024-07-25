import PropTypes from 'prop-types'
import { useState } from 'react'

export function InputText({ inputName, handleInput = () => { }, autofocus = false, children }) {
    const [inputValue, setInputValue] = useState("")
    const capitalize = (title) => title.trim().split(' ').map(
        word => word[0].toLocaleUpperCase() + word.slice(1)
    ).join(' ')

    return (
        <div className="form__input">
            <label htmlFor={inputName}>
                {
                    typeof children == 'string' ?
                        capitalize(children) :
                        children
                }
            </label>
            <input
                className='input'
                value={inputValue}
                onChange={(event) => {
                    event.preventDefault()

                    const newValue = event.target.value
                    if (!handleInput(newValue))
                        return

                    setInputValue(newValue)
                }}
                type="text"
                name={inputName}
                id={inputName}
                autoFocus={autofocus}
            />
        </div>
    )
}

InputText.propTypes = {
    inputName: PropTypes.string.isRequired,
    handleInput: PropTypes.func,
    children: PropTypes.any,
    autofocus: PropTypes.bool
}