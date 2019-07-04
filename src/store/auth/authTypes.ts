/**
 * @file authTypes
 * @description type definitions for auth storeHelper
 * @author tm
 */

/**
 * Naming conventions don't really matter here, but I chose
 * the @@context patter to stay consistent with internal redux naming
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
