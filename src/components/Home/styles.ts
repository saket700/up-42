import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 12px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex: 0 0 75%;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 3rem;
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  position: relative;
  z-index: 1;
  margin: 0.5rem 1rem;
  width: 220px;
`;

export const PriceWrapper = styled.div`
  font-size: 1.8rem;
  padding-bottom: 16px;
`;

export const Text = styled.div`
  font-weight: 600;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  background: #2d3748;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 0.25rem;

  &:hover,
  &:active {
    cursor: pointer;
    background: #1a202c;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  margin: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    border-radius: 50%;
    border: 6px solid #2d3748;
    border-color: #2d3748 transparent #2d3748 transparent;
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`;
