import React from 'react';
import PopupWithForm from './PopupWithForm ';

function PopupEditProfile(props) {
  return (
    <PopupWithForm name='card-add' title={'Редактировать профиль'} titleButton={'Сохранить'} isOpen={props.isOpen} onClose={props.onClose} children={
      <>
        <input type="text" className="popup__input popup__input_data_name" id="userNameInput" name="userNameInput" required
          minLength="2" maxLength="40" />
        <span className="input-error-style" id="userNameInput-error"></span>
        <input type="text" className="popup__input popup__input_data_about" id="userAboutInput" name="userAboutInput"
          required minLength="2" maxLength="200" />
        <span className="input-error-style" id="userAboutInput-error"></span>
      </>
    }>
    </PopupWithForm>
  );
}

export default PopupEditProfile;