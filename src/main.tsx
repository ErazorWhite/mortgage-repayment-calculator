import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {CalculatorForm} from "./components/CalculatorForm/CalculatorForm.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CalculatorForm/>
    </StrictMode>,
)