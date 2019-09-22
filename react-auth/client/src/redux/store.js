import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // link to local storage
import { composeWithDevTools } from 'redux-devtools-extension';
import session from './reducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']
};

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, session),
  cart: (state = []) => []
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
// const persistedReducer = persistReducer(sessionPersistConfig, rootReducer);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { persistor, store };
