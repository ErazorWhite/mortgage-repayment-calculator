import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CalculatorForm } from './components/form/CalculatorForm/CalculatorForm.tsx';
import { StyledContainer } from './main.styled';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledContainer>
      <CalculatorForm />
    </StyledContainer>
  </StrictMode>
);
