import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//

interface CustomerState {
  value: Customer[];
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}
interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}
const initialState: CustomerState = {
  //   value: [{ id: "note", name: "test", food: ["dosa"] }],
  value: [],
};
export const customerslice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      console.log(action.payload);

      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});
export const { addCustomer, addFoodToCustomer } = customerslice.actions;
export default customerslice.reducer;
