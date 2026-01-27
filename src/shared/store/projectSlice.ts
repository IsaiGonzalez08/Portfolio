import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "@/features/projects/domain/Project";

const initialState: any = {
    projects: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[] | null>) {
      state.projects = action.payload;
    },
    clearProjects(state) {
      state.projects = null;
    },
  },
});

export const { setProjects, clearProjects } = projectSlice.actions;
export default projectSlice.reducer;
