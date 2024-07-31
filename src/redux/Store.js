//import { createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";

//export const store = createStore(CounterReducer);

export const store = configureStore({
        reducer: CounterReducer
    });