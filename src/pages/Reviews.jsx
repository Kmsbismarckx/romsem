import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/UI/Button/Button';
import { selectUserIds } from '../store/reducers/usersSlice';
import ReviewsListItem from '../components/Reviews/reviewsListItem/ReviewsListItem';
import '../style/Reviews.css';
import AboutContacts from '../components/About/aboutContacts/aboutContacts';
import Menu from '../components/menu/Menu';
import ReviewsModal from '../components/Reviews/reviewsModal/ReviewsModal';

function Reviews() {
  const reviewsIds = useSelector(selectUserIds);

  const [visible, setVisible] = useState(false);

  return (
    <div className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__list">
        {reviewsIds.map((id) => (
          <ReviewsListItem key={id} id={id} />
        ))}
      </div>
      {visible && <ReviewsModal visible={visible} setVisible={setVisible} />}
      <Button className="reviews_" onClick={() => setVisible(true)}>
        + Добавить отзыв
      </Button>
      <AboutContacts />
      <Menu />
    </div>
  );
}

export default Reviews;
