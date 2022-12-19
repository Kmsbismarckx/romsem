const goodItemOnClick = (currentItem) => {
  const basket = JSON.parse(localStorage.getItem('cart')) || {};
  if (Object.keys(basket).includes(currentItem.id.toString())) {
    basket[currentItem.id].value += 1;
  } else {
    basket[currentItem.id] = { value: 1 };
  }
  localStorage.setItem('cart', JSON.stringify(basket));
};

export default goodItemOnClick;
