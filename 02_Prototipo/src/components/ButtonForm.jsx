import PropTypes from 'prop-types'

export function ButtonForm({ children,id }) {
    return (
        <button type='submit' id={id} className="button">{children}</button>
    )
}

ButtonForm.propTypes = {
    children: PropTypes.any
}
