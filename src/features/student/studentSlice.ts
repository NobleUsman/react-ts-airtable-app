import { createSlice, PayloadAction } from '@reduxjs/toolkit'; // 1. import createSlice to create a reducer slice
import { RootState } from '../../app/store'; // 4. used to set TYPE to export the state

// Define a TYPE for the slice state
export interface StudentState {
    studentValue : object | null
}

// Define the initial state using that TYPE ( keeping the initialState as null at start )
const initialState: StudentState = {
    studentValue: null
}

// 2. create slice using createSlice() method by adding...
export const studentSlice = createSlice({
    name: 'student', // ... name,
    initialState,    // initialState,
    reducers: {      // reducers object which has reducer actions
        // Use the PayloadAction TYPE to declare the contents of `action.payload`
        login: (state, action: PayloadAction<object>) => {
            state.studentValue = action.payload; // login, an "action type", takes initialState as "state" and updates state.student object with payload(updated value)
        },
        logout: (state) => {
            state.studentValue = null; // keeping logout state as null, because when user logs out, the object should get null
        }
    }
})

// 3. export ACTIONS being performed
export const { login, logout } = studentSlice.actions;

// 4. export the STATE to globally access it (its TYPE "RootState" is been declared in store.ts)
// another thing is that ITS USED TO "specify the state in the hooks that we're gonna use in components"
// this function is called a SELECTOR, allows to select a value from the state
export const selectStudent = (state: RootState) => state.student.studentValue

// 5. export the REDUCER itself
export default studentSlice.reducer;