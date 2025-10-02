import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  isAuthenticated: boolean;
  user: null | { id: string; name: string };
  isLoading: boolean;
  notifications: Array<{ id: string; message: string; type: "success" | "error" }>;
  language: string;
  isOnline: boolean;
}

const initialState: GlobalState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
  isAuthenticated: false,
  user: null,
  isLoading: false,
  notifications: [],
  language: "en",
  isOnline: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<GlobalState["user"]>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addNotification: (
      state,
      action: PayloadAction<{ id: string; message: string; type: "success" | "error" }>
    ) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setIsOnline: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const {
  setIsSidebarCollapsed,
  setIsDarkMode,
  setIsAuthenticated,
  setUser,
  setIsLoading,
  addNotification,
  removeNotification,
  setLanguage,
  setIsOnline,
} = globalSlice.actions;

export default globalSlice.reducer;