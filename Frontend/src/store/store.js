import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";

const productPersistConfig = {
    key: 'product',
    storage: storageSession,
    whitelist: ["product"]
}

const cartPersistConfig = {
    key: 'cart',
    storage: storageSession,
    whitelist: ["items"]
}

const productPersistedReducer = persistReducer(productPersistConfig, productReducer);
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        product: productPersistedReducer,
        cart: cartPersistedReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store);