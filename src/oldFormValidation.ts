interface Form {
  name: string;
  birthday: string;
  email: string;
  password: string;
}

const validateRegisterForm = (form: Form) => {
  const { name, birthday, email, password } = form;
  if (name === "") throw new Error("Name is required");
  if (email === "") throw new Error("Email is required");
  if (password === "") throw new Error("Password is required");
  if (birthday === null) throw new Error("Birthday is required");

  const birthdayDate = new Date(birthday);
  const isUnderage = new Date().getFullYear() - birthdayDate.getFullYear() < 18;
  if (isUnderage) throw new Error("You are underage");

  const isPasswordShort = password.length < 6;

  if (isPasswordShort) throw new Error("Your password is too short");

  const isEmail = email.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  if (!isEmail) throw new Error("This email is invalid");

  return true;
};

export default validateRegisterForm;
