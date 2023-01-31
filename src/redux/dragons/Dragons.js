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
        reserved: false,
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
    reserve: (state, action) => {
      const reservedArr = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
      return { ...state, dragons: reservedArr };
    },

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

const { actions } = dragonsSlice;
export const { reserve } = actions;
export default dragonsSlice.reducer;
