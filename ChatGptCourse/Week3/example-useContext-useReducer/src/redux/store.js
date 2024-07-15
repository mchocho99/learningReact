import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./peopleSlice";

const store = configureStore({ reducer: peopleSlice });

export default store;
