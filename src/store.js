import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './state_manager/reducers'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer ) 


export function configureStore() {
    const enhancer = compose(
        applyMiddleware(logger, thunk),
    );

    let store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store);
    // return createStore(reducer, enhancer);
    return {store, persistor};
}


