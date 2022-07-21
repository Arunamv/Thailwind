import React, { useState } from 'react';
import './Stepmain.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import FinalComponent from './FinalComponent';

const StepMain = () => {
    const list=[
        { key: 'firstStep', label: 'My First Step', isDone: true, component: FirstComponent },
     
        { key: 'secondStep', label: 'My Second Step', isDone: false, component: SecondComponent },
        { key: 'finalStep', label: 'My Final Step', isDone: false, component: FinalComponent },
      ]
    const [steps, setSteps] = useState(list);
    const [activeStep, setActiveStep] = useState(steps[0]);
    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
          alert('You have completed all steps.');
          return;
        }
     
        const index = steps.findIndex(x => x.key === activeStep.key);
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = true;
          return x;
        }))
        setActiveStep(steps[index + 1]);
      }
     
      const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
     
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = false;
          return x;
        }))
        setActiveStep(steps[index - 1]);
      }
  return (
    <div className="App1">

    <div className="box">
      <div className="steps">
        <ul className="nav">
          {steps.map((step, i) => {
            return <li key={i} className={`${activeStep.key === step.key ? 'active' : undefined} ${step.isDone ? 'done' : ''}`}>
              <div>Step {i + 1}<br /><span>{step.label}</span></div>
            </li>
          })}
        </ul>
      </div>
      <div className="step-component">
        {activeStep.component()}
      </div>
      <div className="btn-component">
        <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
        <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
      </div>
    </div>
  </div>
  )
}

export default StepMain
