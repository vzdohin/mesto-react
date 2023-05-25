import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import PopupWithForm from './components/PopupWithForm ';
import PopupEditProfile from './components/PopupEditProfile';
import PopupAddCard from './components/PopupAddCard';
import PopupEditAvatar from './components/PopupEditAvatar';
import PopupConfirm from './components/PopupConfirm';
import api from './utils/Api';
import Card from './components/Card';
import ImagePopup from './components/ImagePopup';

function App() {
  // состояния isOpen попаов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({name:'', link:''})
  //состояния компонентов карточек
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  // состояние карточек
  const [cards, setCards] = useState([])


  // обработчики кликов открытия
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleConfirmDeleteClick() {
    setIsConfirmDeletePopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }
  // обработчик закрытия попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard(false)
  }
  //забираем с сервера информацию о профиле (имя, описание, ссылка аватара)
  React.useEffect(() => {
    api.getUserInfo(userName, userDescription, userAvatar)
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`)
      })
  }, [])
  React.useEffect(() => {
    api.getAllCards(cards).
    then(data => {
      setCards(
        data.map((item) => ({
          name: item.name,
          id: item._id,
          link: item.link,
          likes: item.likes
        }))
      )
    })
    .catch((err) => {
      alert(`Ошибка: ${err}`)
    })
  }, [])

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onConfirmDelete={handleConfirmDeleteClick}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          onCardClick={handleCardClick}
          cards={cards}
        />
        {/* <Card
          cards={cards} /> */}
        <Footer />
        <PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} />
        <PopupAddCard
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} />
        <PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} />
        <ImagePopup
          selectedCard={selectedCard}
          isOpen={selectedCard}
          onClose={closeAllPopups} />
        <PopupConfirm
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
