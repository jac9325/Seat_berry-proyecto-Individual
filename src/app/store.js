import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carReducer from '../slices/carSlices';
import userReducer from '../slices/userSlices';
import rentRedcuer from '../slices/carRentSlices';
import rentedReducer from '../slices/rentedSlices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cars: carReducer,
    user: userReducer,
    rent: rentRedcuer,
    rented: rentedReducer,
  },
});
