import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slices/slider";
import CategoriesReducer from "./slices/categories";
import ProductReducer from "./slices/product";
import FillterReducer from "./slices/fillter";
import FavoriteReducer from "./slices/favorite";
import AuthReducer from "./slices/auth";
import CartReducer from "./slices/cart";
import UserReducer from "./slices/user";
import BuyReducer from "./slices/buy";
import OrderReducer from "./slices/order";

const store = configureStore({
  reducer: {
    Slider: sliderReducer,
    Categories: CategoriesReducer,
    Product: ProductReducer,
    Fillter: FillterReducer,
    Favorite: FavoriteReducer,
    Auth: AuthReducer,
    Order: OrderReducer,
    Cart: CartReducer,
    User: UserReducer,
    Buy: BuyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
