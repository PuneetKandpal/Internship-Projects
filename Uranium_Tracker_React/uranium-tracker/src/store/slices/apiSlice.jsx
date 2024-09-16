import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

// Async Thunks for API Calls
export const fetchHomeData = createAsyncThunk("api/fetchHomeData", async () => {
  try {
    const response = await axiosInstance.get("/home");
    console.log("Home data fetched:", response.data); // Debug line
    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error); // Log the exact error
    throw error;
  }
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

export const fetchNuclearData = createAsyncThunk(
  "api/fetchNuclearData",
  async () => {
    const response = await axiosInstance.get("/nuclear-data");
    return response.data;
  }
);

export const fetchCalendarData = createAsyncThunk(
  "api/fetchCalendarData",
  async () => {
    const response = await axiosInstance.get("/calendar");
    return response.data;
  }
);

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
    home: null,
    news: null,
    stocks: null,
    glossary: null,
    nuclear: null,
    calendar: null,
    video: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = "loading"; // Set status to "loading" when the request starts
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.home = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchStocksData.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchGlossaryData.fulfilled, (state, action) => {
        state.glossary = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchNuclearData.fulfilled, (state, action) => {
        state.nuclear = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCalendarData.fulfilled, (state, action) => {
        state.calendar = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchVideoData.fulfilled, (state, action) => {
        state.video = action.payload;
        state.status = "succeeded";
      });
    // .addCase(fetchVideoData.fulfilled, (state, action) => {
    //   console.log("Video data fetched:", action.payload);
    //   state.video = action.payload;
    //   state.status = "succeeded";
    // })
  },
});

export default apiSlice.reducer;
