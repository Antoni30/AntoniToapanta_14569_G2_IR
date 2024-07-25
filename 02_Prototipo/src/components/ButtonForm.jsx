import PropTypes from 'prop-types'

export function ButtonForm({ children }) {
    return (
        <button type='submit' className="button">{children}</button>
    )
}

ButtonForm.propTypes = {
    children: PropTypes.any
}