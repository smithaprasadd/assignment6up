import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGenresApi } from "../api/mockApi";

export const fetchGenres = createAsyncThunk("genres/fetch", async () => {
  return await fetchGenresApi();
});

const genreSlice = createSlice({
  name: "genres",
  initialState: { list: [], selected: "All", status: "idle" },
  reducers: {
    selectGenre(state, action) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "success";
    });
  },
});

export const { selectGenre } = genreSlice.actions;
export default genreSlice.reducer;
