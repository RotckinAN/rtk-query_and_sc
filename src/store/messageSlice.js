import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "metricMessage",
  initialState: {
    value: "this is a metric message",
  },
  reducers: {
    setValue(state, action) {
      state.value = action.payload.value;
    },
  },
});

export const { setValue } = messageSlice.actions;
export default messageSlice.reducer;
