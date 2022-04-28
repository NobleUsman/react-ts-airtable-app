import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../features/student/studentSlice'; // 1. import the required slice 

// 2. create the store using configureStore() method... hence the store is created using the reducer that we made
export const store = configureStore({
  reducer: {
    student: studentReducer,
  }, // multiple reducers can be added
});


// 4. export the dispatch TYPED method
export type AppDispatch = typeof store.dispatch;

// 3. export RootState so that our slice uses it as its TYPE to export the STATE from our slice
export type RootState = ReturnType<typeof store.getState>;


// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
