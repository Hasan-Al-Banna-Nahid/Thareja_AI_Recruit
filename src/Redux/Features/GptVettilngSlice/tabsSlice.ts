// Redux/Features/GptVettilngSlice/tabsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabsState } from "./Types/Types";

const initialState: TabsState = {
  activeTab: "Report",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
