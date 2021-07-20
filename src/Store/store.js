import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { fraseReducer } from '../Reducers/fraseReducer';
import { uiReducer } from '../Reducers/uiReducer';

const reducers = combineReducers({
    ui: uiReducer,
    frase: fraseReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);