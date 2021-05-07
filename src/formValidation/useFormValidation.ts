import { useState, useCallback } from "react";

import validateForm, { ErrorInterface } from "./";
import { FormName } from "./testSchema";

export type DefaultForm = { [key: string]: unknown };

const useFormValidation = <Form = DefaultForm>(formName: FormName) => {
  const [errorItems, setErrorItems] = useState<ErrorInterface>();

  const validateError = async (formParams: Form) => {
    const errors = await validateForm(formParams, formName);

    if (errors) {
      setErrorItems(errors);
      return false;
    }
    return true;
  };

  const handleErrorMessage = useCallback(
    (item: keyof Form, helperText?: string) => {
      if (errorItems) {
        const error = errorItems.errors.find((err) => err.item === item);

        if (error) return { error: true, helperText: error?.message };
      }

      return { helperText };
    },
    [errorItems]
  );

  const clearErrors = () => {
    setErrorItems(undefined);
  };

  return { handleErrorMessage, clearErrors, validateError, errorItems };
};

export default useFormValidation;
