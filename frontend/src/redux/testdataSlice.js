import {createSlice} from '@reduxjs/toolkit';

const testdataSlice = createSlice({
    name:'testdata',
    initialState:{
        currentData:null,
        apiHitCount:0,
        loading:false,
        error:null
    },
    reducers:{
        getDataStart: (state, action) =>{
            state.loading = true;
            state.error = null;
        },
        getDataSuccess: (state, action) => {
            state.currentData = action.payload;
            state.loading = false;
            state.error = null;
        },
        getDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addDataStart: (state, action) =>{
            state.loading = true;
            state.error = null;
        },
        addDataSuccess: (state, action) => {
            state.currentData = action.payload;
            state.apiHitCount++;
            state.loading = false;
            state.error = null;
        },
        addDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateDataStart: (state, action) =>{
            state.loading = true;
            state.error = null;
        },
        updateDataSuccess: (state, action) => {
            state.currentData = action.payload;
            state.apiHitCount++;
            state.loading = false;
            state.error = null;
        },
        updateDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {
getDataStart, getDataSuccess, getDataFailure,
addDataStart, addDataSuccess, addDataFailure,
updateDataStart, updateDataSuccess, updateDataFailure
} = testdataSlice.actions;

export default testdataSlice.reducer;