import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",
    initialState: { counterval: 0 },
    reducers: {
        increment: (state, action) => {
            state.counterval++
        },
        decrement: (state, action) => {

            state.counterval--

        },
        add: (state, action) => {
            state.counterval += Number(action.payload.num);
            // state.counterval += Number(action.payload);

        },
        subtract: (state, action) => {

            state.counterval -= Number(action.payload.num);
        }
    }
});



export const counterAction = counterSlice.actions;
export default counterSlice;