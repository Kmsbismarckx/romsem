import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/UI/Button/Button';
import { addUser, selectUserIds } from '../store/reducers/usersSlice';
import ReviewsListItem from '../components/Reviews/reviewsListItem/ReviewsListItem';
import '../style/Reviews.css';
import AboutContacts from '../components/About/aboutContacts/aboutContacts';
import Menu from '../components/menu/Menu';
import ReviewsModal from '../components/Reviews/reviewsModal/ReviewsModal';
import appContext from '../context';
import SideMenu from '../components/sideMenu/SideMenu';
import Cart from './Cart';
import Header from '../components/Header/Header';

function Reviews() {
  const { isLaptop } = useContext(appContext);
  const dispatch = useDispatch();
  const reviewsIds = useSelector(selectUserIds);

  const [visible, setVisible] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', lastName: '', comment: '' });

  const addNewReviewHandler = () => {
    if (visible && Object.values(newReview).every((item) => item !== '')) {
      setVisible(false);
      dispatch(addUser(newReview));
      setNewReview({ ...newReview, name: '', lastName: '', comment: '' });
    } else {
      setVisible(true);
    }
  };

  if (isLaptop) {
    return (
      <div className="reviews">
        <SideMenu />
        <div className="reviews__main">
          <Header />
          <div className="reviews__content">
            <div className="reviews__header">
              <h2 className="reviews__title">Отзывы</h2>
              <Button className="reviews_" onClick={addNewReviewHandler}>
                + Добавить отзыв
              </Button>
            </div>
            {visible && (
              <ReviewsModal
                visible={visible}
                setVisible={setVisible}
                newReview={newReview}
                setNewReview={setNewReview}
              />
            )}
            <div className="reviews__list">
              {reviewsIds.map((id) => (
                <ReviewsListItem key={id} id={id} />
              ))}
            </div>
          </div>
        </div>
        <Cart />
      </div>
    );
  }
  return (
    <div className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className="reviews__list">
        {reviewsIds.map((id) => (
          <ReviewsListItem key={id} id={id} />
        ))}
      </div>
      {visible && (
        <ReviewsModal
          visible={visible}
          setVisible={setVisible}
          newReview={newReview}
          setNewReview={setNewReview}
        />
      )}
      <Button className="reviews_" onClick={addNewReviewHandler}>
        + Добавить отзыв
      </Button>
      <AboutContacts />
      <Menu />
    </div>
  );
}

export default Reviews;
