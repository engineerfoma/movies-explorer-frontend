import './Profile.scss';
import Input from '../Input/Input';

function Profile() {

    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <Input
                    about="login"
                    placeholder="Имя"
                    value="Виталий"
                    state="true"
                />
                <Input
                    about="email-my"
                    placeholder="E-mail"
                    value="pochta@yandex.ru"
                    state="true"
                />
                <div className="profile__edit">
                    <button className="profile__button profile__button_edit">Редактировать</button>
                    <button className="profile__button profile__button_logout">Выйти из аккаунта</button>
                </div>
            </div>
        </main>
    )
}

export default Profile;