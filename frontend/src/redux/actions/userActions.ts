import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api/axios.config';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/types/api.types';

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterCredentials,
  { rejectValue: any }
>('user/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post<AuthResponse>(
      `/auth/register/${credentials.role}`, 
      credentials
    );
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Registration failed');
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: any }
>('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Login failed');
  }
});

// Add getCurrentUser action
export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);