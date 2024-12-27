export function myCreateStore(reducer) {
    let state;
    const listners = [];
    const store = {

        getState() {
            return state;
        },

        dispatch(action) {
            state = reducer(state, action);
            listners.forEach(listner => listner());
        },

        subscirbe(listner) {
            listners.push(listner);

            return () => {
                const listnerIndex = listners.findIndex(regiteredListner => regiteredListner === listner)
                listners.splice(listnerIndex, 1);
            }
        }
    }

    store.dispatch({ type: "@@INIT" })
    return store;

}

