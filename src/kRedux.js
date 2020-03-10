export function createStore(reducer,enhancer) {
    if(enhancer) {
        return enhancer(createStore)(reducer)
    }
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

export function applyMiddleware(...middlewares) {
    return createStore=>(...args)=>{
        const store = createStore(...args)
        let dispatch = store.dispatch
        const middleApi = {
            dispatch,
            getState: store.getState
        }
        const middlewaresChain = middlewares.map(middleware=>middleware(middleApi))
        dispatch = compose(...middlewaresChain)(dispatch)
        return {
            ...store,
            dispatch
        }
    }
}   

function compose(...funcs) {
   return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}

