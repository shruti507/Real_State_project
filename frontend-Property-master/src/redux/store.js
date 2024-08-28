import { configureStore } from '@reduxjs/toolkit'
import slice from './slice'

const store = configureStore({
    reducer:{
        Items:slice
    }
});

export default store;