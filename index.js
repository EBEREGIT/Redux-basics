const { createStore } = require("redux");

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;

    case "SUB":
      state = state - action.payload;
      break;
  }

  return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("state changed" + " " + store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "SUB",
  payload: 50,
});
