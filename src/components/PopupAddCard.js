import React from 'react';
import PopupWithForm from './PopupWithForm ';

function PopupAddCard(props) {
  return (
    <PopupWithForm name='card-add' title={'Новое место'} titleButton={'Создать'} isOpen={props.isOpen} onClose={props.onClose} children={
      <>
        <input type="text" placeholder="Название" className="popup__input popup__input_card_name" id="cardNameInput"
          name="cardNameInput" required minLength="2" maxLength="30" />
        <span className="input-error-style" id="cardNameInput-error"></span>
        <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_card_url" id="cardUrlInput"
          name="cardUrlInput" required />
        <span className="input-error-style" id="cardUrlInput-error"></span>
      </>
    }>
    </PopupWithForm>
  );
}

export default PopupAddCard;