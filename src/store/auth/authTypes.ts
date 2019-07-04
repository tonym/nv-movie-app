/**
 * @file authTypes
 * @description type definitions for auth storeHelper@author tm
 */

export enum AuthActionTypes {
  LOGIN = '@@auth/login',
  LOGOUT = '@@auth/logout',
};

export interface AuthState {
  readonly user: string;
};
