export const  LOGIN = '@@auth/login';
export const  LOGOUT = '@@auth/logout';

/**
 * Declare state types with `readonly` modifier for compile time immutability.
 */
export interface AuthState {
  readonly user: string;
};
