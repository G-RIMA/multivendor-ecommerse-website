export enum UserRole {
    ADMIN = 'admin',
    VENDOR = 'vendor',
    CUSTOMER = 'customer'
  }
  
  export interface BaseUser {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    role: UserRole;
  }
  
  export interface CompanyDetails {
    companyName: string;
    registrationNumber: string;
    kraPin: string;
    businessAddress: string;
    businessAddress2?:string;
    businessEmail?: string;
    businessPhone?: string;
  }
  
  export interface ShippingAddress {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
  export interface User extends BaseUser {
    companyDetails?: CompanyDetails; // For vendors
    shippingAddresses?: ShippingAddress[]; // For customers
    adminLevel?: number; // For admins
  }
  
  export interface RegisterCredentials {
    email: string;
    password: string;
    role: UserRole;
    firstName?: string;
    lastName?: string;
    phone?: string;
    companyDetails?: CompanyDetails;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }
  
  export interface ErrorResponse {
    message: string;
    errors?: Record<string, string[]>;
  }
  