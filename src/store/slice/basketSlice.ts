import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardItem } from "../../services/fake_data";

type InitialType = {
  quantity: number;
  productList: CardItem[];
  total: number;
};
const initialState: InitialType = {
  quantity: 0,
  productList: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ quantity: number; cardItem: CardItem }>
    ) => {
      const isItemExist = state.productList.findIndex(
        (e) => e._id == action.payload.cardItem._id
      );
      if (isItemExist == -1) {
        state.quantity += 1;
        state.productList.push({
          ...action.payload.cardItem,
          quantity: action.payload.quantity,
        });
        state.total += action.payload.quantity * action.payload.cardItem.price;
      } else {
        state.productList[isItemExist].quantity += action.payload.quantity;
        state.total += action.payload.quantity * action.payload.cardItem.price;
      }
    },
    removeProduct: (state, action: PayloadAction<{ cardItem: CardItem }>) => {
      const index = state.productList.findIndex(
        (e) => e._id === action.payload.cardItem._id
      );
      state.productList.splice(index, 1);
      state.total -=
        action.payload.cardItem.quantity * action.payload.cardItem.price;
      state.quantity -= 1;
    },
    removeAllProduct: (state) => {
      if (state.productList.length > 0) {
        state.productList = [];
        state.total = 0;
        state.quantity = 0;
      }
    },
    basketLocale: (state, action: PayloadAction<{ getInitial?: boolean }>) => {
      if (action.payload.getInitial != null) {
        const getLocaleBasketData = localStorage.getItem("basket");
        if (getLocaleBasketData) {
          const getSaveToData: InitialType = JSON.parse(getLocaleBasketData);
          state.productList = getSaveToData.productList;
          state.quantity = getSaveToData.quantity;
          state.total = getSaveToData.total;
        }
      } else {
        const saveToBasketData: InitialType = {
          total: state.total,
          productList: state.productList,
          quantity: state.quantity,
        };
        localStorage.setItem("basket", JSON.stringify(saveToBasketData));
      }
    },
  },
});

export const { removeProduct, addProduct, removeAllProduct, basketLocale } =
  basketSlice.actions;
export default basketSlice.reducer;
/* 
burada const yazmaadan neden actionslar export edilemiyor?
*/
