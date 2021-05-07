import * as Yup from "yup";

import register, { RegisterForm } from "./schemas/register";

const listSchemas = {
  register,
};

export type FormName = keyof typeof listSchemas;

export type FormValues = RegisterForm;

const testSchema = async (
  schema: FormName,
  value: Partial<FormValues>
): Promise<true | Yup.ValidationError[]> => {
  try {
    const formSchema = listSchemas[schema];

    await formSchema.validate(value, {
      abortEarly: false,
    });

    return true;
  } catch (err) {
    return err.inner;
  }
};

export default testSchema;
