import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(b.date),
});
const initialState = usersAdapter.getInitialState();

initialState.entities = {
  1: {
    id: 1,
    date: new Date().toLocaleDateString(),
    name: 'Розалия',
    lastName: '',
    comment:
      'Ваша доставка и ваши блюда лучшие в Харькове!) ' +
      'всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне',
  },
  2: {
    id: 2,
    date: new Date().toLocaleDateString(),
    name: 'Елена',
    lastName: '',
    comment: 'Ооочень вкусно!!!!!',
  },
  3: {
    id: 3,
    date: new Date().toLocaleDateString(),
    name: 'Сергей',
    lastName: 'Гаврилюк',
    comment:
      'Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. ' +
      'За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. ' +
      'Успехов Вам и приятных бонусов нам )',
  },
};

initialState.ids = Object.keys(initialState.entities).map((id) => Number(id));

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        usersAdapter.addOne(state, action.payload);
      },
      prepare(name, lastName, comment) {
        return {
          payload: { id: nanoid(), date: new Date().toLocaleDateString(), name, lastName, comment },
        };
      },
    },
  },
});

export default usersSlice.reducer;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.users);
