import axios, { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    showLoading?: boolean;
    showError?: boolean;
  }
}
