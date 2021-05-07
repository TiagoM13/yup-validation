import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 30rem;
  border-color: ${({ error }) => (error ? "#f00" : "#000")};
`;

export const HelperText = styled.text<{ error?: boolean }>`
  color: ${({ error }) => (error ? "#f00" : "#808080")};
  margin: 0.2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
