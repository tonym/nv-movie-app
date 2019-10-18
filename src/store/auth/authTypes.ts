/**
 * Naming conventions don't really matter here, but the @@context/action
 * pattern is consistent with internal redux naming
 */
export enum AuthActionTypes {
  LOGIN = '@@auth/login',
  LOGOUT = '@@auth/logout',
};

/**
 * Declare state types with `readonly` modifier for compile time immutability.
 */
export interface AuthState {
  readonly user: string;
};
