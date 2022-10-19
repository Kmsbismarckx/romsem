const goodItemOnClick = (currentItem) => {
  const basket = JSON.parse(localStorage.getItem('basket')) || {};
  if (Object.keys(basket).includes(currentItem.id.toString())) {
    basket[currentItem.id].value += 1;
  } else {
    basket[currentItem.id] = { value: 1 };
  }
  // const basket = JSON.parse(localStorage.getItem('basket')) || {};
  //
  // if (Object.keys(basket).includes(currentItem.id.toString())) {
  //   basket[currentItem.id].quantity += 1;
  // } else {
  //   basket[currentItem.id] = currentItem;
  //   basket[currentItem.id].quantity = 1;
  // }
  //
  localStorage.setItem('basket', JSON.stringify(basket));
};

export default goodItemOnClick;
