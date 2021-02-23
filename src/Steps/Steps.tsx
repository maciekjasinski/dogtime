import React, { useState } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';

export function Steps() {
    const [step, setStep] = useState(0);
    return (
        <div>
            {step === 0 &&  <Step1 />}
            {step === 1 &&  <Step2 />}
        </div>
    )
}
