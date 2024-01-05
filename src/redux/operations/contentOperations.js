import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance.js";

const homePage = createAsyncThunk(
  "content/homePage",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("users");

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const search = createAsyncThunk(
  "content/search",
  async (
    { category, ingredient, searchWord, page = 1, limit = 9 },
    { rejectWithValue }
  ) => {
    try {
      const searchWordStr = searchWord ? `&searchWord=${searchWord}` : "";
      const categoryStr = category ? `&category=${category}` : "";
      const ingredientStr = ingredient ? `&ingredient=${ingredient}` : "";

      const URL = `search?page=${page}&limit=${limit}${searchWordStr}${categoryStr}${ingredientStr}`;
      const { data } = await instance.get(URL);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const coursesByCategory = createAsyncThunk(
  "content/coursesByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`recipes/category/${category}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const courseByID = createAsyncThunk(
  "content/courseByID",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`recipes/${id}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const news = createAsyncThunk(
  "content/news",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`own/${id}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const newsById = createAsyncThunk(
  "content/newsById",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`favorite`);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const addToFavorite = createAsyncThunk(
  "content/addToFavorite",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`favorite/add/${id}`);
      //token

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

const removeFromFavorite = createAsyncThunk(
  "content/removeFromFavorite",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`favorite/remove/${id}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

export {
  homePage,
  search,
  coursesByCategory,
  courseByID,
  news,
  newsById,
  addToFavorite,
  removeFromFavorite,
};
