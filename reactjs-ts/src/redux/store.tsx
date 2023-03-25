import { combineReducers, configureStore } from '@reduxjs/toolkit'

import menubar from './slices/menubar'
import { categoryApi } from '../services/Category.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

// import services
// import { AuthAPI } from 'src/services/AuthAPI'

const rootReducer = combineReducers({
  menubar,
  [categoryApi.reducerPath]: categoryApi.reducer
  //   [AuthAPI.reducerPath]: AuthAPI.reducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(categoryApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export default store
