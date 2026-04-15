import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Create a configured axios instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for passing Authorization token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Modify to get the token from your preferred storage
    // Example: const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const token = null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor for handling global response errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Example global error handler for 401 Unauthorized
    if (error.response?.status === 401) {
      // Handle logout/redirect conditionally
      if (typeof window !== 'undefined') {
        // e.g., window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
