import { Link } from 'react-router-dom'
import './AuthSubmit.scss'

function AuthSubmit({ page, textButton, label, linkText, link }) {
    return (
        <div className={`form__submit form__submit_${page}`}>
            <button type="submit" className="form__submit_button">
                {textButton}
            </button>
            <span className="form__submit_label">
                {label}
                <Link to={link} className="form__submit_link">
                    {linkText}
                </Link>
            </span>
        </div>
    )
}

export default AuthSubmit;