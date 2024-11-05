// types/api.types.ts
export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
  }
  
  export interface ErrorResponse {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
  }
  
  export interface User {
    id: string;
    email: string;
    role: 'admin' | 'vendor' | 'customer';
    firstName?: string;
    lastName?: string;
    companyDetails?: {
      companyName: string;
      registrationNumber: string;
      kraPin: string;
      businessAddress?: string;
      businessEmail?: string;
      businessPhone?: string;
    };
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterCredentials extends LoginCredentials {
    userType: 'admin' | 'vendor' | 'customer';
    firstName?: string;
    lastName?: string;
    companyDetails?: User['companyDetails'];
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
  }