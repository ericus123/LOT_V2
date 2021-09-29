import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import allReducers from "./reducers";

const middlewares = [thunk];

middlewares.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["LoginReducer"],
};
const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };