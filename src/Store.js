import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageStore';

export default configureStore({
	reducer: {
        page: pageReducer,
    },
});
