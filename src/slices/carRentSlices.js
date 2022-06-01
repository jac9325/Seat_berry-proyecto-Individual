import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRentAllRents, createRent } from '../api';

const initialState = {};

// create async thunk function
export const getRentAllAsync = createAsyncThunk('rent/getAll', async () => {
  const response = await getRentAllRents();
  return response.data;
});
export const createRentAsync = createAsyncThunk('rent/create', async (rent) => {
  const response = await createRent(rent);
  return response;
});

export const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    rentToCreate: (state, action) => {
      state.rentToCreate = action.payload;
      state.showModalToCarCreate = true;
    },
    hideModaltoCreate: (state) => {
      state.showModalToCarCreate = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRentAllAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRentAllAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.rent = action.payload;
      })
      .addCase(createRentAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      });
  },
});
export const { rentToCreate, hideModaltoCreate } = rentSlice.actions;
export const selectRentToCreate = (state) => state.rent.rentToCreate;
export const selectModalToCreate = (state) => state.rent.showModalToCarCreate;
export const selectRents = (state) => state.rent.rent;
export default rentSlice.reducer;
