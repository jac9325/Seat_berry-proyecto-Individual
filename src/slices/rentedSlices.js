import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createRented } from '../api';
const initialState = {};

// create async thunk function
export const createRentedAsync = createAsyncThunk(
  'rented/create',
  async (rented) => {
    const response = await createRented(rented);
    return response;
  }
);

export const rentedSlice = createSlice({
  name: 'rented',
  initialState,
  reducers: {
    rentedToCreate: (state, action) => {
      state.rentedToCreate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createRentedAsync.fulfilled, (state, action) => {
      state.created = action.payload;
    });
  },
});

export const { rentToCreate, hideModaltoCreate } = rentedSlice.actions;
export const selectRentToCreate = (state) => state.renteded.rentedToCreate;
export const selectModalToCreate = (state) =>
  state.renteded.showModalToCarCreate;
export const selectRents = (state) => state.rented.rented;
export default rentedSlice.reducer;
