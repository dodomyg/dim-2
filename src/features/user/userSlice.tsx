import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'0', name:'John'},
    {id:'1', name:'Sam'},
    {id:'2', name:'Bruno'},
]


export const userSlice= createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
    
})

export const selectAllUsers = (state:any) => state.users


// export const {  } = userSlice.actions
export default userSlice.reducer