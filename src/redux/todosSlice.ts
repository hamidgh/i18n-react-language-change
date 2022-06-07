import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state: any, action: any) {
      state.push({
        text: action.payload.text
      })
    }
  }
})

export const { todoAdded } = todosSlice.actions
export default todosSlice.reducer