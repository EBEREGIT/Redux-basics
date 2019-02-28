const { createStore } = require('redux');

// initialize the state here
const initialState = {
    age: 21
};

// create the reducer here
const myReducer = (state = initialState, action) => {
    const newState = {...state};

    // define the action here
    // for ADD
    if(action.type === 'ADD'){
        newState.age += action.val;
    }

    // for SUB
    if(action.type === 'SUB'){
        newState.age -= action.val;
    }
    return newState;
};

// create store here
const store = createStore(myReducer);

store.subscribe(() => {
    // log output here
    console.log('state changed' + JSON.stringify(store.getState()));
})

//set actions here
store.dispatch({type:'ADD', val: 10});
store.dispatch({type:'SUB', val: 5});