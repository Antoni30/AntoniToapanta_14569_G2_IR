import PropTypes from 'prop-types'
import './LinkButton.css'
import { Link } from 'react-router-dom'

export function LinkButton({ href, target = '_self', id, children }) {
    return (
        <Link id={id} className='link' to={href} target={target}>{children}</Link>
    )
}

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    id: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}