import React, { useState } from 'react';
import './Accordion.css';
import setaBaixo from '../../assets/calculadora/setaB.svg';
import setaCima from '../../assets/calculadora/setaC.svg';

const Accordion = ({ title, children }) => {
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
                {isOpen && <img src={setaCima} alt="Seta" className="setaCima" />}
            </div>
        </div>
    );
};

export default Accordion;
