import React from 'react';
import PopupWithForm from './PopupWithForm ';

function PopupEditAvatar(props) {
  return (
    <PopupWithForm name='card-add' title={'Обновить аватар'} titleButton={'Сохранить'} isOpen={props.isOpen} onClose={props.onClose} children={
      <>
        <input
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_card_url"
          id="avatarUrlInput" name="avatarUrlInput"
          required />
        <span className="input-error-style" id="avatarUrlInput-error"></span>
      </>
    }>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;