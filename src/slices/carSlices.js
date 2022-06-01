import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCars, createCar, deleteCar, updateCar } from '../api';

const initialState = {};

// create async thunk function
export const getAllCarsAsync = createAsyncThunk('cars/getAll', async () => {
  const response = await getAllCars();
  return response.data;
});

export const createCarAsync = createAsyncThunk('cars/create', async (car) => {
  const response = await createCar(car);
  return response;
});

export const updateCarAsync = createAsyncThunk('cars/update', async (car) => {
  const response = await updateCar(car);
  return response;
});

export const deleteCarAsync = createAsyncThunk('cars/delete', async (id) => {
  const response = await deleteCar(id);
  return response;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    carToUpdate: (state, action) => {
      state.carToUpdate = action.payload;
      state.showModalToUpdate = true;
    },
    hideModaltoUpdate: (state) => {
      state.showModalToUpdate = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCarsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(createCarAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      })

      .addCase(deleteCarAsync.fulfilled, (state, action) => {
        state.deleted = action.payload;
      });
  },
});
export const { carToUpdate, hideModaltoUpdate } = carsSlice.actions;
export const selectCars = (state) => state.cars.cars;
export const selectCarToUpdate = (state) => state.cars.carToUpdate;
export const selectModalToUpdate = (state) => state.cars.showModalToUpdate;
export default carsSlice.reducer;
