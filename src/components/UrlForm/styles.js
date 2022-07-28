import styled from "styled-components";

export const UrlFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  padding: 0px 10px;
`;
export const InputContainer = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  height: 60px;
  border-radius: 999px;
  overflow: hidden;
`;
export const UrlInput = styled.input`
  flex: 1;
  padding: 0px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #170017;
  border: none;

  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  padding: 0px 25px;
  background: #e196ff;
  border: none;
  font-weight: 700;
  color: #170017;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 450px) {
    padding: 0px 8px;
  } ;
`;

export const ShortUrlContainer = styled.section`
  background: #e196ff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 5px;
  width: 100%;
  max-width: 700px;
  color: #170017;
  font-size: 20px;
  border-radius: 999px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    gap: 5px;
  }
`;
