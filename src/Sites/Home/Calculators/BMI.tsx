import React, {useState, ChangeEvent} from 'react';

import Label from '../../../Labels/Label'
import CalculatorsInput from './CalculatorsInput';
import ClassicButton from '../../../Buttons/ClassicButton';

function BMI() {
    const [height, setHeight] = useState(175);
    function inputHeight(e: ChangeEvent<HTMLInputElement>){
        setHeight(Number(e.target.value));
    }

    const [weight, setWeight] = useState(75);
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(Number(e.target.value));
    }

    const [BMIvalue, setBMIvalue] = useState(0);
    function calculateBMI(){
        let value = weight / ((height/100)*(height/100));
        setBMIvalue(value);
    }

    const [showDescription, setShowDescription] = useState(false);
    const description = (
        <div className="text-background">
            This is a measurement of a person’s leanness based on their height and weight. It is used as a general indicator of whether a person has healthy body weight for their height. 
        </div>
    );

    return(
        <div>
            <ClassicButton
                className="show-hide-description-button"
                text="Body Mass Index Calculator"
                type="button"
                id="BMIbutton"
                onClick={() =>{setShowDescription(!showDescription)}}
            />
            {showDescription && 
                description
            }
            <div>
                <Label
                    className="calculators-label"
                    text="Input your height in cm:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="string"
                    value={height}
                    name="heigth"
                    onChange={inputHeight}
                    />
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input your weight in kg:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="string"
                    value={weight}
                    name="weight"
                    onChange={inputWeight}/>
            </div>
            <div>
                <ClassicButton
                    className="submit-for-calculator-button"
                    text="Calculate BMI"
                    type="button"
                    onClick={calculateBMI}/>
            </div>
            {BMIvalue === 0
                ? 'Make sure you have pressed "Calculate" button or entered all the required quantities (height and weight)'
                : 'Your Body Mass Index is ' + BMIvalue.toFixed(2)}
        </div>
    );
}

export default BMI;