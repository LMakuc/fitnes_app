import React, {useState, ChangeEvent} from 'react';

import Label from '../../../Labels/Label';
import CalculatorsInput from './CalculatorsInput';
import ClassicButton from '../../../Buttons/ClassicButton';

function BMR() {
    
    const [gender, setGender] = useState('male');

    const [age, setAge] = useState(18);
    function inputAge(e: ChangeEvent<HTMLInputElement>){
        setAge(Number(e.target.value));
    }

    const [height, setHeight] = useState(175);
    function inputHeight(e: ChangeEvent<HTMLInputElement>){
        setHeight(Number(e.target.value));
    }

    const [weight, setWeight] = useState(75);
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(Number(e.target.value));
    }

    const [BMRvalue, setBMRvalue] = useState(0);
    function calculateBMR(){
        let value;
        if(gender === 'male'){
            value = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else if(gender === 'female'){
            value = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        setBMRvalue(Number(value));
    }

    const [showDescription, setShowDescription] = useState(false);
    const description = (
        <div className="text-background">
             The value obtained from this calculator tells you, an estimated number of calories a person can consume in a day to maintain their body weight, assuming they remain at rest. It’s basically all the energy that your body need for keeping your heart beating, breathing, digesting food, making new blood cells, etc.
        </div>
    );

    return(
        <div>
            <ClassicButton
                className="show-hide-description-button"
                text="Body Metabolic Rate Calculator"
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
                    text="Select your gender:"/>
            </div>
            <div>
                <select 
                    style={{
                        backgroundColor: "rgb(31, 31, 31)",
                        color: "rgb(255, 221, 0)",
                        width: "50%",
                        textAlign: "center"
                    }}
                    value={gender}
                    onChange={e => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select>
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input your age:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="number"
                    value={age}
                    name="age"
                    onChange={inputAge}/>
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input your height in cm:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="number"
                    value={height}
                    name="heigth"
                    onChange={inputHeight}
                    />
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input your weight:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="number"
                    value={weight}
                    name="weight"
                    onChange={inputWeight}
                    />
            </div>
            <div>
                <ClassicButton
                    className="submit-for-calculator-button"
                    text="Calculate BMR"
                    type="button"
                    onClick={calculateBMR}/>
            </div>
            {BMRvalue === 0 
                ? 'Make sure you have pressed "Calculate" button or entered all the required quantities (gender, age, height and weight)'
                : 'Your Body Metabolic Rate is ' + BMRvalue.toFixed(2) + ' calories/day'}
        </div>
    );
}

export default BMR;