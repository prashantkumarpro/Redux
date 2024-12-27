import { legacy_createStore as createStore } from "redux";
// console.dir(createStore)

const countTextElem = document.querySelector('.count_text');
const incrementBtn = document.querySelector('.increment_bnt');
const decrementBtn = document.querySelector('.decrement_btn');



const initialState = {
    count: 0,
    name: "Prashant",
    age: 25
}

// let prevState = state;
// function increment() {

//     // *** mutating state *** //
//     // state.count = state.count + 1;

//     // *** Not mutating state *** //
//     state = { count: state.count + 1 }
// }


const INCREMENT = 'count/increment';
const DECREMENT = 'count/decrement';
const INCREASE_BY = 'count/increaseBy';
const DECREASE_BY = 'count/decreaseBy';

function reducer(state = initialState, action) {

    // if (action.type === INCREMENT) {
    //     return { ...state, count: state.count + 1 }
    // } else if (action.type === DECREMENT) {
    //     return { ...state, count: state.count - 1 }
    // } else if (action.type === INCREASE_BY) {
    //     return { ...state, count: state.count + action.payload }
    // } else if (action.type === DECREASE_BY) {
    //     return { ...state, count: state.count - action.payload }
    // }

    // return state

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INCREASE_BY:
            return { ...state, count: state.count + action.payload };
        case DECREASE_BY:
            return { ...state, count: state.count - action.payload };
        default:
            return state;

    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store)

store.subscribe(() => {
    console.log(store.getState());
    countTextElem.innerText = store.getState().count;
});

countTextElem.innerText = store.getState().count;
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 10 });


incrementBtn.addEventListener('click', function () {
    store.dispatch({ type: INCREMENT });
});

decrementBtn.addEventListener('click', function () {
    store.dispatch({ type: DECREMENT });
});