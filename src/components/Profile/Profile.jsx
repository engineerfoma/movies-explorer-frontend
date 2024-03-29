import './Profile.scss'
import { useContext, useState } from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import useFormWithValidation from '../../utils/validationForm'
import { completeMessage } from '../../utils/constants'
import { useEffect } from 'react'

function Profile({ onUpdateUserData, onLogout, loading, stateMessage }) {
    const currentUser = useContext(CurrentUserContext);
    const {
        values,
        errors,
        isValid,
        resetForm,
        handleChange
    } = useFormWithValidation();
    const text = (`${loading ?
        'Редактирование...'
        :
        'Редактировать'}`);
        
    const validation = !isValid || (values.name === currentUser?.name && values.email === currentUser?.email);

    const handlerSubmitForm = (e) => {
        e.preventDefault();
        if (!values.name) {
            values.name = currentUser?.name;
        }
        if (!values.email) {
            values.email = currentUser?.email;
        }
        onUpdateUserData(values);
    }


    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
    }

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
                    {!stateMessage && (<span className="message message_error">{completeMessage}</span>)}
                    <div className="profile__edit">
                        <button
                            type="submit"
                            className={`profile__button profile__button_edit 
                            profile__button_edit${validation && "-disabled"}
                            `}
                            disabled={validation && "disabled"}
                        >
                            {text}
                        </button>
                        <button className="profile__button profile__button_logout" onClick={handleLogout}>Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Profile;