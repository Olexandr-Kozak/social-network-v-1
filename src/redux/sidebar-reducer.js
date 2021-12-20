
let initialState = {
  friends: [
    {id: 1, names: 'Sasha', age: 18},
    {id: 2, names: 'Dasha', age: 20},
    {id: 3, names: 'Masha', age: 15},
    {id: 4, names: 'Dima', age: 30},
    {id: 5, names: 'Misha', age: 35}
  ]
};
const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;