import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../../store/reducers/usersSlice';

function ReviewsListItem({ id }) {
  const review = useSelector((state) => selectUserById(state, id));
  console.log(review);

  return (
    <div className="reviews__list__item">
      <div className="reviews__list__item__title">
        <h2 className="reviews__list__item__name">{`${review.name} ${review.lastName}`}</h2>
        <p className="reviews__list__item__date">{review.date}</p>
      </div>
      <div className="reviews__list__item__content">{review.comment}</div>
    </div>
  );
}

export default ReviewsListItem;
