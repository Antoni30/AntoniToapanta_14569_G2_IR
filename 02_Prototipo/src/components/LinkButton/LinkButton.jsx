import PropTypes from 'prop-types'
import './LinkButton.css'
import { Link } from 'react-router-dom'

export function LinkButton({ href, target = '_self', children }) {
    return (
        <Link className='link' to={href} target={target}>{children}</Link>
    )
}

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    children: PropTypes.any.isRequired
}