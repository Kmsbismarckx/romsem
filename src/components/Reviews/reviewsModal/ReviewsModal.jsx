import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import './reviewsModal.css';

function ReviewsModal({ visible, setVisible, newReview, setNewReview }) {
  const rootClasses = ['reviews__modal'];

  if (visible) {
    rootClasses.push('reviews__modal_active');
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="reviews__modal__content" onClick={(event) => event.stopPropagation()}>
        <h2 className="reviews__modal__content__title">Добавить отзыв</h2>
        <div className="reviews__modal__content__title_container">
          <div className="reviews__modal__content__item">
            <label htmlFor="reviews__name">Имя:</label>
            <Input
              id="reviews__name"
              className="reviews__modal__content__name reviews__modal__content__input"
              placeholder="Имя"
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
          </div>
          <div className="reviews__modal__content__item">
            <label htmlFor="reviews__last-name">Фамилия:</label>
            <Input
              id="reviews__last-name"
              className="reviews__modal__content__surname reviews__modal__content__input"
              placeholder="Фамилия"
              onChange={(e) => setNewReview({ ...newReview, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="reviews__modal__content__item">
          <label htmlFor="reviews__comment">Ваш комментарий:</label>
          <textarea
            id="reviews__comment"
            className="reviews__modal__content__comment"
            placeholder="Ваш комментарий"
            rows="10"
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          />
        </div>
        <button
          type="button"
          className="reviews__modal_close-button"
          onClick={() => setVisible(false)}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default ReviewsModal;
