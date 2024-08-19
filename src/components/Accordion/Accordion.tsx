// Accordion.tsx
import { useState, ReactNode } from 'react';
import './styles.css';
import setaBaixo from '../../assets/Calculator/setaB.svg';
import setaCima from '../../assets/Calculator/setaC.svg';

// Define a interface para as propriedades do componente
interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <button className="accordion-title" onClick={toggleAccordion}>
                {title}
                <img src={isOpen ? setaCima : setaBaixo} alt="Seta" />
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                {children}
                {/* {isOpen && <img src={setaCima} alt="Seta" className="setaCima" />} */}
            </div>
        </div>
    );
};

export default Accordion;

