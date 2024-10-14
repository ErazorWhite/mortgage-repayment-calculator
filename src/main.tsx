import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {CalculatorForm} from "./components/form/CalculatorForm/CalculatorForm.tsx";
import {Container} from "./components/Containter/Container.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Container>
            <CalculatorForm/>
        </Container>
    </StrictMode>,
)