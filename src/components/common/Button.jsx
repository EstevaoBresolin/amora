// src/components/common/Button.jsx
import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${props => props.primary && `
    background-color: var(--primary);
    color: white;
    &:hover {
      background-color: #ff5252;
    }
  `}
  
  ${props => props.secondary && `
    background-color: var(--secondary);
    color: var(--dark);
    &:hover {
      background-color: #ffc233;
    }
  `}
  
  ${props => props.outline && `
    background-color: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  `}
  
  ${props => props.fullWidth && `
    width: 100%;
  `}
`;

export default Button;