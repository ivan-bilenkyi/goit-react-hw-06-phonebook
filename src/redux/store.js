import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactReducer } from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  //   locale: localeReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
