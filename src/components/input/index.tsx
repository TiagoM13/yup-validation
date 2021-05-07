import React from "react";
import { HelperText, Input, InputContainer } from "./styles";

interface Props {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  type?: string;
}

const TextInput = (props: Props) => {
  const { value, onChange, helperText, error, placeholder, type } = props;

  return (
    <InputContainer>
      <Input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        error={error}
      />
      <HelperText error={error}>{helperText}</HelperText>
    </InputContainer>
  );
};

export default TextInput;
