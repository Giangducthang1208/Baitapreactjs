import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLogin: {}
}

const useReducer = createSlice({
  name: 'useReducer',
  initialState,
  reducers: {}
});

export const {} = useReducer.actions

export default useReducer.reducer