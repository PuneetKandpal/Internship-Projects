import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

// Async Thunks for API Calls
export const fetchHomeData = createAsyncThunk("api/fetchHomeData", async () => {
  const response = await axiosInstance.get("/home");
  return response.data;
});

export const fetchNewsData = createAsyncThunk("api/fetchNewsData", async () => {
  const response = await axiosInstance.get("/news");
  return response.data;
});

export const fetchStocksData = createAsyncThunk(
  "api/fetchStocksData",
  async () => {
    const response = await axiosInstance.get("/stocks");
    return response.data;
  }
);

export const fetchGlossaryData = createAsyncThunk(
  "api/fetchGlossaryData",
  async () => {
    const response = await axiosInstance.get("/glossary");
    return response.data;
  }
);

// API Slice
const apiSlice = createSlice({
  name: "api",
  initialState: {
    home: null,
    news: null,
    stocks: null,
    glossary: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.home = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchStocksData.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.status = "succeeded";
      }).addCase(fetchGlossaryData.fulfilled, (state, action) => {
        state.glossary = action.payload;
        state.status = "succeeded";
      });
  },
});

export default apiSlice.reducer;
