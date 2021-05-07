import { useState } from "react";
import TextInput from "../components/input";
import { RegisterForm } from "../formValidation/schemas/register";
import useFormValidation from "../formValidation/useFormValidation";
import { Container, FormContainer, Submit } from "./styles";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const form = { name, email, password, birthday };
  const { validateError, handleErrorMessage } = useFormValidation<RegisterForm>(
    "register"
  );

  const handleSubmit = async () => {
    const result = await validateError(form);
    console.log(result);

    if (result) {
      console.log("Faz o tratamento de registro");
    }
  };

  return (
    <Container>
      <FormContainer>
        <TextInput
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          {...handleErrorMessage("name")}
        />

        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          {...handleErrorMessage("email", "Insert your email")}
        />
        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          {...handleErrorMessage("password")}
        />
        <TextInput
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          {...handleErrorMessage("birthday")}
        />
        <Submit onClick={handleSubmit}>Enviar</Submit>
      </FormContainer>
    </Container>
  );
};

export default Register;
