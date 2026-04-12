import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 9999px;
  padding: 8px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 16px;
    padding: 16px;
    gap: 8px;
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 8px 16px;
  gap: 12px;
  border-right: 1px solid #e5e7eb;

  &:nth-last-of-type(2) {
    border-right: none;
  }

  svg {
    color: #6b7280;
    font-size: 18px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    width: 100%;
    padding: 12px 8px;
    
    &:nth-last-of-type(2) {
      border-bottom: none;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: #1f2937;
  background: transparent;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  gap: 8px;
  margin-left: 8px;

  &:hover {
    background-color: #1d4ed8;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
    border-radius: 12px;
  }
`;
