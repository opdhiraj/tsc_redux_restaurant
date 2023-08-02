import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}
const initialState: ReservationState = {
  value: ["OM", "Prakash", "dhiraj"],
};
export const reservationSlice = createSlice({
  name: "reservation",
  initialState: initialState,
  reducers: {
    addResrvation: (state, action: PayloadAction<string>) => {
      console.log("reservationslice ", action.payload, action.type);

      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      console.log(action.payload);

      state.value.splice(action.payload, 1); //splice()->first is index number and second is how element you want to delete
    },
  },
});
export const { addResrvation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
