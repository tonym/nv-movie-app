/**
 * @file authConstants
 * @description Constants for auth and login
 * @author tm
 */

interface authConstants {
  LOGIN: string;
  LOGOUT: string;
}

const authConstants: authConstants = {
  LOGIN: 'loginFailure',
  LOGOUT: 'logout',
}

export default authConstants;