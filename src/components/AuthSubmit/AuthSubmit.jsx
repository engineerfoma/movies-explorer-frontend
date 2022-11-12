import { Link } from 'react-router-dom';
import './AuthSubmit.scss';

function AuthSubmit({ page, textButton, label, linkText }) {
    return (
        <div className={`form__submit form__submit_${page}`}>
            <button type="sumbit" className="form__submit_button">
                {textButton}
            </button>
            <span className="form__submit_label">
                {label}
                <Link to="/signup" className="form__submit_link">
                    {linkText}
                </Link>
            </span>
        </div>
    )
}

export default AuthSubmit;