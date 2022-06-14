import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  margin: 8px 0px;
`;

export const CartHeader = styled.div`
  font-size: 2rem;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 16px 0;
`;

export const CartItemWrapper = styled.div`
  font-weight: 500;
  font-size: 1rem;
  border-color: #e2e8f0;
  border-bottom: 1px solid black;
  border-color: gray;
  word-wrap: break-word;
  padding: 20px 16px;
`;

export const Title = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Credits = styled.div``;

export const IconWrapper = styled.div`
  &:hover,
  &:active {
    cursor: pointer;
  }
`;

export const Total = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  padding: 16px 8px;
`;

export const Button = styled.button`
  background: #2d3748;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 0.25rem;
  width: 120px;
  margin-left: 16px;

  &:hover,
  &:active {
    cursor: pointer;
    background: #1a202c;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 1rem;
  color: red;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;
