import React from 'react';
import Card from './Card';

function Main(props) {
  return (
    <div>
      <main className="content">
        <section className="profile">
          <div className="profile__card">
            <div className="profile__avatar-container" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src={props.userAvatar} alt="изображение профиля" />
            </div>
            <div className="profile__info">
              <div className="profile__container">
                <h1 className="profile__name" id="userName">{props.userName}</h1>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
              </div>
              <p className="profile__about" id="userAbout">{props.userDescription}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section className="cards" aria-label="Карточки с красивыми местами">
          {props.cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onCardClick={props.onCardClick} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Main;