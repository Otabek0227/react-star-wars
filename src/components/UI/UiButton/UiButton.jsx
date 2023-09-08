import PropTypes from 'prop-types';
import styles from './UiButton.module.css'

export default function UiButton({ onClick, disabled, children }) {
    return (
        <button onClick={onClick} disabled={disabled} className={`btn btn-outline-light ${styles.myButton}`}>{children}</button>
    )
}
UiButton.propTypes = {
    // children: PropTypes.text,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
}