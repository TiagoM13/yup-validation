import * as Yup from "yup";

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  birthday: string;
}

const register = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("This email is invalid"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "This password is too short"),
  birthday: Yup.string()
    .required("This field is required")
    .test("is-underage", "You are underage", (birthday) => {
      if (!birthday) return false;
      const date = new Date(birthday);
      const now = new Date();

      return now.getFullYear() - date.getFullYear() < 18;
    }),
});

export default register;
