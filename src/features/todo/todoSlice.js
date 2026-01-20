import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

/* CREATE TODO */
export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await apiInstance.post("/todo.json", todo);
      return { ...todo, id: response.data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* GET ALL TODOS */
export const getAllTodo = createAsyncThunk(
  "todo/getAllTodo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get("/todo.json");

      if (!response.data) return [];

      return Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, title }, { rejectWithValue }) => {
    try {
      await apiInstance.patch(`/todo/${id}.json`, { title });
      return { id, title };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


/* DELETE TODO */
export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await apiInstance.delete(`/todo/${id}.json`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
  builder
    /* CREATE TODO */
    .addCase(createTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    })
    .addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to create todo";
    })

    /* GET ALL TODOS */
    .addCase(getAllTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    })
    .addCase(getAllTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch todos";
    })

    /* UPDATE TODO */
    .addCase(updateTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].title = action.payload.title;
      }
      state.loading = false;
    })
    .addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update todo";
    })

    /* DELETE TODO */
    .addCase(deleteTodo.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.loading = false;
    })
    .addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete todo";
    });
}


});

export default todoSlice.reducer;
