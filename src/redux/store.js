import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Make sure to create this reducer
const store = configureStore({
reducer: rootReducer,
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;