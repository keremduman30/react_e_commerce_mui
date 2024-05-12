import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slice/basketSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsApi } from "../services/products_api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

setupListeners(store.dispatch);
