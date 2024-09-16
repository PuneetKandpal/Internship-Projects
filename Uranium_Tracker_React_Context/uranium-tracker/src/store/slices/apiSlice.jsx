import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

// Async Thunks for API Calls

export const fetchVideoData = createAsyncThunk(
  "api/fetchVideoData",
  async () => {
    const response = await axiosInstance.get("/youtube-videos");
    return response.data;
  }
);

// API Slice
const apiSlice = createSlice({
  name: "api",
  initialState: {
    video: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideoData.fulfilled, (state, action) => {
      state.video = action.payload;
      state.status = "succeeded";
    });
  },
});

export default apiSlice.reducer;
