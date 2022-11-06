const goodItemOnClick = (currentItem) => {
  const basket = JSON.parse(localStorage.getItem('cart')) || {};
  if (Object.keys(basket).includes(currentItem.id.toString())) {
    basket[currentItem.id].value += 1;
  } else {
    basket[currentItem.id] = { value: 1 };
  }
  // const cart = JSON.parse(localStorage.getItem('cart')) || {};
  //
  // if (Object.keys(cart).includes(currentItem.id.toString())) {
  //   cart[currentItem.id].quantity += 1;
  // } else {
  //   cart[currentItem.id] = currentItem;
  //   cart[currentItem.id].quantity = 1;
  // }
  //
  localStorage.setItem('cart', JSON.stringify(basket));
};

export default goodItemOnClick;
