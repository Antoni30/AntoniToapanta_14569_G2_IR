import PropTypes from 'prop-types'

export function Form({ title, getData, children }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.target))
        getData(data)
    }

    const capitalize = (title) => title.trim().split(' ').map(
        word => word[0].toLocaleUpperCase() + word.slice(1)
    ).join(' ')

    return (
        <form className="form" onSubmit={handleSubmit}>
            <legend className='form__title'>{capitalize(title)}</legend>
            {children}
        </form>
    )
}

Form.propTypes = {
    title: PropTypes.string.isRequired,
    getData: PropTypes.func,
    children: PropTypes.any
}