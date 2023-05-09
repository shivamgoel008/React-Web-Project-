import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["loda","lasan"],
    },

    // contains mapping of actions and reducer function 
    reducers:{  

        addItem:(state,action)=>{              // additem is action when the reducer function ()=>{} is called 
            state.items.push(action.payload);   // state is the previous state(in starting it is initial state) and action is the data that is comming in
        },                                     // it does not return anything

        clearCart:(state,action)=>{            // we do not require any action because we for clearing the cart we do not require any data to come in
            state.items=[];
        },

        removeItem:(state,action)=>{
            state.items.pop();
        }
    }
});

export const {addItem,clearCart,removeItem}=cartSlice.actions;

// my components needs to access the slice so we exports actions and reducers from this slice
// on line no 10 re used reducers but at the time of export we are using reducer(line no 28)
export default cartSlice.reducer;


// <para>