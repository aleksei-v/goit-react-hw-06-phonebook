import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/slice";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});


