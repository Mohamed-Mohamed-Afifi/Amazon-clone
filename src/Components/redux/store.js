import { configureStore } from '@reduxjs/toolkit';
import formSlice from './fetchData';
import filterRed from './filterReducer';
import getSlice from './getSlice';
import countStore from './reducers'
import userSlice from './testApi';
// import reducers from './reducers';
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(reducers, enhancer())
const store = configureStore({
    reducer: {
        counter: countStore,
        checker: formSlice,
        filterElements: filterRed,
        add: userSlice,
        get: getSlice
    }
}, enhancer())
export default store;