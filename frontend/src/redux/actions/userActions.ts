import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/api/crud/api.service';
import { AuthResponse, LoginCredentials, RegisterCredentials, User, ErrorResponse } from '@/types/api.types';

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterCredentials,
  { rejectValue: ErrorResponse }
>('user/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post<AuthResponse>(`/api/auth/register/${credentials.userType}`, credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: ErrorResponse }
>('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const updateUserProfile = createAsyncThunk<
  User,
  Partial<User>,
  { rejectValue: ErrorResponse }
>('user/updateProfile', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.put<User>('/user/profile', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});