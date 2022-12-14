import React from 'react';
import Input from '../../UI/Input/Input';
import './Payment.css';

function Payment({ paymentType, paymentTypeHandler, activeClassHandler, formData, setFormData }) {
  return (
    <div className="form__type-of-payment">
      <div className="form__toggle">
        <div
          className={`form__cash form__toggle-item ${activeClassHandler(paymentType, 'cash')}`}
          onClick={() => paymentTypeHandler('cash')}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`form__toggle-item ${activeClassHandler(paymentType, 'cash')}`}
              d="M17.1816 9.07549V6.54563C17.1816 5.68778 16.5162 4.99012 15.6755 4.92247L13.326 0.818843C13.1083 0.439316 12.7568 0.168054 12.3361 0.0554156C11.9174 -0.0564561 11.4796 0.00229861 11.1048 0.220404L3.05087 4.90928H1.63635C0.733897 4.90928 0 5.64313 0 6.54563V16.3636C0 17.2661 0.733859 18 1.63635 18H15.5452C16.4477 18 17.1816 17.2661 17.1816 16.3636V13.8338C17.6567 13.6643 17.9997 13.2145 17.9997 12.6819V10.2274C17.9997 9.69476 17.6567 9.24493 17.1816 9.07549ZM14.7248 4.90928H11.1592L13.8334 3.35235L14.7248 4.90928ZM13.4269 2.64235L9.53311 4.90928H7.918L13.0231 1.93702L13.4269 2.64235ZM11.5167 0.927494C11.7017 0.819227 11.9178 0.790463 12.1243 0.845613C12.3333 0.901529 12.5075 1.03657 12.6157 1.22552L12.6166 1.22702L6.29201 4.90928H4.67698L11.5167 0.927494ZM16.3634 16.3636C16.3634 16.8147 15.9962 17.1818 15.5452 17.1818H1.63635C1.18533 17.1818 0.818194 16.8147 0.818194 16.3636V6.54563C0.818194 6.09461 1.18533 5.72747 1.63635 5.72747H15.5452C15.9962 5.72747 16.3634 6.09461 16.3634 6.54563V9.00013H13.9089C12.5554 9.00013 11.4544 10.1011 11.4544 11.4546C11.4544 12.8081 12.5554 13.9091 13.9089 13.9091H16.3634V16.3636ZM17.1816 12.6819C17.1816 12.9076 16.9982 13.091 16.7725 13.091H13.9089C13.0064 13.091 12.2725 12.3571 12.2725 11.4546C12.2725 10.5522 13.0064 9.81829 13.9089 9.81829H16.7725C16.9982 9.81829 17.1816 10.0016 17.1816 10.2274V12.6819Z"
              fill="black"
            />
          </svg>
          <p>??????????????????</p>
        </div>
        <div
          className={`form__card form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
          onClick={() => paymentTypeHandler('card')}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_25_525)">
              <path
                className={`form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
                d="M19.7083 3.66666H2.29165C1.0285 3.66666 0 4.69516 0 5.95835V16.0417C0 17.3049 1.0285 18.3334 2.29165 18.3334H19.7083C20.9715 18.3334 22 17.3049 22 16.0417V5.95835C22 4.69516 20.9715 3.66666 19.7083 3.66666ZM21.0833 16.0417C21.0833 16.7998 20.4664 17.4167 19.7083 17.4167H2.29165C1.53355 17.4167 0.916652 16.7998 0.916652 16.0417V5.95835C0.916652 5.20025 1.53355 4.58335 2.29165 4.58335H19.7083C20.4664 4.58335 21.0833 5.20025 21.0833 5.95835V16.0417H21.0833Z"
                fill="#000"
              />
              <path
                className={`form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
                d="M21.5417 6.41666H0.458348C0.205348 6.41666 0 6.622 0 6.875V9.625C0 9.878 0.205348 10.0834 0.458348 10.0834H21.5417C21.7947 10.0834 22 9.878 22 9.625V6.875C22 6.622 21.7947 6.41666 21.5417 6.41666ZM21.0833 9.16666H0.916652V7.33331H21.0833V9.16666H21.0833Z"
                fill="#000"
              />
              <path
                className={`form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
                d="M8.70835 12.8333H3.20835C2.95535 12.8333 2.75 13.0387 2.75 13.2917C2.75 13.5447 2.95535 13.75 3.20835 13.75H8.70835C8.96135 13.75 9.1667 13.5446 9.1667 13.2916C9.1667 13.0386 8.96135 12.8333 8.70835 12.8333Z"
                fill="#000"
              />
              <path
                className={`form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
                d="M8.70835 14.6667H3.20835C2.95535 14.6667 2.75 14.872 2.75 15.125C2.75 15.378 2.95535 15.5834 3.20835 15.5834H8.70835C8.96135 15.5834 9.1667 15.378 9.1667 15.125C9.16665 14.872 8.96135 14.6667 8.70835 14.6667Z"
                fill="#000"
              />
              <path
                className={`form__toggle-item ${activeClassHandler(paymentType, 'card')}`}
                d="M17.8747 11.9167H16.958C16.1999 11.9167 15.583 12.5336 15.583 13.2917V14.2083C15.583 14.9664 16.1999 15.5833 16.958 15.5833H17.8747C18.6328 15.5833 19.2497 14.9664 19.2497 14.2083V13.2917C19.2497 12.5336 18.6328 11.9167 17.8747 11.9167ZM18.333 14.2084C18.333 14.4614 18.1277 14.6667 17.8747 14.6667H16.958C16.705 14.6667 16.4997 14.4614 16.4997 14.2084V13.2917C16.4997 13.0387 16.705 12.8334 16.958 12.8334H17.8747C18.1277 12.8334 18.333 13.0387 18.333 13.2917V14.2084Z"
                fill="#000"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_525">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>????????????</p>
        </div>
      </div>

      {paymentType === 'cash' && (
        <div className="form__change">
          <div className="form__checkbox-area">
            <input
              type="checkbox"
              id="change"
              onChange={(e) =>
                setFormData({ ...formData, ...formData.change, isChange: e.target.checked })
              }
              className="form__checkbox"
            />
            <label htmlFor="change">?????????????????????? ?????????? ??</label>
          </div>
          <Input
            className="form__change-sum form__item  form__input"
            placeholder="??????????"
            type="number"
            onChange={(e) =>
              formData.isChange ? setFormData({ ...formData, changesSum: e.target.value }) : null
            }
            disabled={!formData.isChange}
          />
        </div>
      )}
    </div>
  );
}

export default Payment;
