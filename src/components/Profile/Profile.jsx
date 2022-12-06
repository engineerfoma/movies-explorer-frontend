import './Profile.scss'
import { useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import useFormWithValidation from '../../utils/validationForm'
import { repeatMessage, completeMessage } from '../../utils/constants'

function Profile({ onUpdateUserData, onLogout, stateErr, loading }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMessage, setIsMessage] = useState('');
    const [stateError, setStateEror] = useState(stateErr);
    const currentUser = useContext(CurrentUserContext);
    const {
        values,
        setValues,
        errors,
        isValid,
        handleChange
    } = useFormWithValidation();
    // (
    //     `${isLiked ? 'list-element__like list-element__like_active' : 'list-element__like'}`
    // );
    const text = (`${loading ?
        'Редактирование...'
        :
        'Редактировать'}`);

    const handlerSubmitForm = (e) => {
        e.preventDefault();
        onUpdateUserData(values);

        if (currentUser?.name === values.name && currentUser?.email === values.email) {
            // setIsPopupOpen(true);
            // setStateEror(true);
            // setIsMessage(repeatMessage);
        } else {
            // setIsPopupOpen(true);
            // setStateEror(false);
            // setIsMessage(completeMessage);
        }

        if (!values.name) {
            values.name = currentUser?.name;
        }

        if (!values.email) {
            values.email = currentUser?.email;
        }
    }

    // const click = (e) => handlerSubmitForm(e);

    // useEffect(() => {
    //     onUpdateUserData(values);
    // }, [click])

    // useEffect(() => {
    //     setValues({
    //         name: currentUser?.name,
    //         email: currentUser?.email,
    //     });
    // }, [setValues, currentUser]);

    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
                <form className="profile__form"
                    noValidate
                    onSubmit={handlerSubmitForm}
                >
                    <div className="container__profile container__login">
                        <label htmlFor="input-login" className="label label__login label__profile">
                            Имя
                        </label>
                        <input
                            type="text"
                            id="input-login"
                            name="name"
                            placeholder="Имя"
                            className="profile__input profile__input_login"
                            value={values.name || currentUser?.name}
                            minLength="2"
                            maxLength="30"
                            onChange={handleChange}
                            required
                            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                        />
                        <span className="span login__error">{errors.name}</span>
                    </div>
                    <div className="container__profile container__email">
                        <label htmlFor="input-email" className="label label__email label__profile">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="input-email"
                            name="email"
                            placeholder="E-mail"
                            className="profile__input profile__input__email"
                            value={values.email || currentUser?.email}
                            onChange={handleChange}
                            required
                            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                        />
                        <span className="span login__error">{errors.name}</span>
                    </div>
                    {isPopupOpen && stateError && (<span className="message message_error">{isMessage}</span>)}
                    {isPopupOpen && !stateError && (<span className="message">{isMessage}</span>)}
                    <div className="profile__edit">
                        <button
                            type="submit"
                            className={`profile__button profile__button_edit `}
                        // disabled={isValid ? "disabled" : ""}
                        // profile__button_edit${isValid ? "-disabled" : ""}
                        >
                            {text}
                        </button>
                        <button className="profile__button profile__button_logout" onClick={onLogout}>Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Profile;