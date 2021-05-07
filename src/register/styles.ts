import styled from "styled-components";
import background from "../assets/background.jpg";
export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  height: max-content;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  margin: 1rem 0;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 30rem;
`;

export const Submit = styled.button`
  width: auto;
`;
