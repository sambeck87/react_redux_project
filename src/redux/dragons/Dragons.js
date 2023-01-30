import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions

const GET_DATA = 'react_redux_project/dragons/GET_DATA';
const baseUrl = 'https://api.spacexdata.com/v3/dragons';

// Action Creators

export const fetchDragons = createAsyncThunk(
  GET_DATA, async () => fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const parsedData = data.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        images: [...dragon.flickr_images],
      }));
      return parsedData;
    }),
);

// Reducer
const dragonsSlice = createSlice({
  name: 'react_redux_project/dragons',
  initialState: {
    dragons: [],
    loading: false,
  },
  reducers: {
  },
  extraReducers: {
    [fetchDragons.fulfilled]: (state, action) => {
      const prevState = state;
      prevState.dragons = action.payload;
      prevState.loading = false;
    },
    [fetchDragons.pending]: (state) => {
      const prevState = state;
      prevState.loading = true;
    },
    [fetchDragons.rejected]: (state) => {
      const prevState = state;
      prevState.loading = false;
    },
  },
});

export default dragonsSlice.reducer;
