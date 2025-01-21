import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Student {
  id: string;
  name: string;
  class: string;
  photo: string;
}

interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  students: Student[];
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  parent: Parent | null;
  selectedStudent: Student | null;
  userType: 'parent' | 'student' | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  parent: null,
  selectedStudent: null,
  userType: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; parent: Parent; userType: 'parent' | 'student' }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.parent = action.payload.parent;
      state.selectedStudent = action.payload.parent.students[0];
      state.userType = action.payload.userType;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.parent = null;
      state.selectedStudent = null;
      state.userType = null;
    },
    selectStudent: (state, action: PayloadAction<Student>) => {
      state.selectedStudent = action.payload;
    },
  },
});

export const { login, logout, selectStudent } = authSlice.actions;
export default authSlice.reducer; 