// Redux/Features/GptVettilngSlice/tabsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface TabsState {
  activeTab: string;
}

const initialState: TabsState = {
  activeTab: "Report",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
