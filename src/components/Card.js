import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <section className="cards" aria-label="Карточки с красивыми местами">
      {/* {props.cards.map((card) => ( */}
      <article className="card" key={props.card.id}>
        <img className="card__image" onClick={handleClick} src={props.card.link} />
        <div className="card__container">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__button-like-container">
            <button type="button" className="card__button-like"></button>
            <p className="card__button-like-counter">{props.card.likes.length}</p>
          </div>
        </div>
        <button type="button" className="card__button-delete"></button>
      </article>
      {/* ))} */}
    </section>
  )
}

export default Card;