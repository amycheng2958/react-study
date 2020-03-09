export function createStore(reducer) {
    let currentState = undefined;
    let listeners = []
    function dispatch(action) {
        currentState = reducer(currentState,action)
        listeners.map(listener=>listener())
    }
    function getState() {
        return currentState
    }
    function subscribe(listener) {
        listeners.push(listener)
    }
    dispatch({type: 'KKB-REDUX'})
    return {
        dispatch,
        getState,
        subscribe
    }
}