import { createSlice } from "@reduxjs/toolkit";

import { handlePending, handleRejected, handleFullfilled } from "../utils";
import {
  homePage,
  search,
  courses,
  courseByID,
  news,
  newsById,
  addToFavorite,
  removeFromFavorite,
} from "../operations/contentOperations";

const initialState = {
  search: "",
  courses: [],
  teachers: [],
  testimonials: [],
  courseByID: "",
  favorite: [],
  news: [],
  newsByID: "",
  isLoading: false,
  error: null,
};

const handleHomePage = (state, { payload }) => {
  state.courses = payload.webinar;
  state.teachers = payload.users;
  state.news = payload.blogs;
  state.testimonials = payload.testimonials;
  handleFullfilled(state);
};

const handleSearch = (state, { payload }) => {
  state.search = payload;
  handleFullfilled(state);
};

const handleCourses = (state, { payload }) => {
  state.courses = payload.webinar;
  handleFullfilled(state);
};

const handleCourseByID = (state, { payload }) => {
  state.courseByID = payload;
  handleFullfilled(state);
};

const handleNews = (state, { payload }) => {
  state.news = payload;
  handleFullfilled(state);
};

const handleNewsByID = (state, { payload }) => {
  state.newsByID = payload;
  handleFullfilled(state);
};

const handleAddToFavorite = (state, { payload }) => {
  state.favorite.result.push(payload);
  handleFullfilled(state);
};

const handleRemoveFromFavorite = (state, { payload }) => {
  state.favorite.result = state.favorite.result.filter(
    ({ _id }) => _id !== payload.result._id
  );
  handleFullfilled(state);
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(homePage.fulfilled, handleHomePage)
      .addCase(search.fulfilled, handleSearch)
      .addCase(courses.fulfilled, handleCourses)
      .addCase(courseByID.fulfilled, handleCourseByID)
      .addCase(news.fulfilled, handleNews)
      .addCase(newsById.fulfilled, handleNewsByID)
      .addCase(addToFavorite.fulfilled, handleAddToFavorite)
      .addCase(removeFromFavorite.fulfilled, handleRemoveFromFavorite)

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export default contentSlice.reducer;
