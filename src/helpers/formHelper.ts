/**
 * @file formHelper
 * @description Helper methods for forms
 * @author tm
 */

import validator from 'validator';

interface Validation {
  field: string;
  method: string;
  args?: any;
  validWhen: boolean;
  message?: string;
}

interface Validations {
  array: Validation[]
}

export const validate = (validations: Validations) => {
/*
  let validation: any;

  validations.forEach((v: Validation) => {
    if (!validation[v.field].isInvalid) {
      const args = v.args || [];
      const validation_method =
            typeof v.method === 'string' ?
            validator[v.method] :
            v.method
      if(validation_method(state[v.field].toString(), ...args) !== v.validWhen) {
        validation[v.field] = { isInvalid: true, message: v.message }
        validation.isValid = false;
      }
    }
  });

  return validation;
*/
}
