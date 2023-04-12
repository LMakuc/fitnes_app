import React, {useState, ChangeEvent} from 'react';

import Label from '../../../Labels/Label';
import CalculatorsInput from './CalculatorsInput';
import ClassicButton from '../../../Buttons/ClassicButton';

function CC() {
    
    const [BMR, setBMR] = useState(0);
    function inputBMR(e: ChangeEvent<HTMLInputElement>){
        setBMR(Number(e.target.value));
    }

    const [activityLevel, setActivityLevel] = useState("");

    const [gainLossPercent, setGainLossPercent] = useState(0);

    const [CCvalue, setCCvalue] = useState(0);
    
    function calculateCC(){
        let value;
        console.log("Bmr: " + BMR);
        console.log("Activity level: " + activityLevel);
        console.log("Gain/loss percent: " + gainLossPercent);
        value = BMR * Number(activityLevel) * gainLossPercent;

        setCCvalue(value);
    }

    const [showDescription, setShowDescription] = useState(false);
    const description = (
        <div className="text-background">
            This calculator tells you how much calories you would have to eat if you wanted to maintain, lose or gain a certain number of weight in a week.
        </div>
    );

    return(
        <div>
            <ClassicButton
                className="show-hide-description-button"
                text="Calorie Calculator"
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
                    text="Input your BMR:"/>
            </div>
            <div>
                <CalculatorsInput
                    className="calculators-input"
                    type="string"
                    value={BMR}
                    name="BMR"
                    onChange={inputBMR}/>
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input your level of activity:"/>
            </div>
            <div>
                <select
                    className="calculators-select"
                    value={activityLevel}
                    onChange={e => setActivityLevel(e.target.value)}>
                        <option value="1.2">Sedentary (little or no exercise, desk job)</option>
                        <option value="1.375">Lightly active (light exercise/sports 1 - 3 days/week)</option>
                        <option value="1.55">Moderately active (exercise/sports 6-7 days/week)</option>
                        <option value="1.725">Very active (hard exercise every day)</option>
                        <option value="1.9">Extra active (hard exercise 2 or more times per day)</option>
                </select>
            </div>
            <div>
                <Label
                    className="calculators-label"
                    text="Input how much you want to gain/lose:"/>
            </div>
            <div>
                <select
                    className="calculators-select"
                    value={gainLossPercent}
                    onChange={e => setGainLossPercent(parseFloat(e.target.value))}>
                        <option value="0.63">Extreme weight loss (-1kg/week)</option>
                        <option value="0.82">Weight loss (-0,5kg/week)</option>
                        <option value="0.91">Mild weight loss (-0,25kg/week)</option>
                        <option value="1">Maintain weight</option>
                        <option value="1.09">Mild weight gain (0,25kg/week)</option>
                        <option value="1.18">Weight gain (0,5kg/week)</option>
                        <option value="1.37">Fast weight gain (1kg/week)</option>
                </select>
            </div>

            <div>
                <ClassicButton
                    className="submit-for-calculator-button"
                    text="Calculate calories"
                    type="button"
                    onClick={calculateCC}/>
            </div>

            {CCvalue === 0
                ? 'Make sure you have pressed "Calculate" button or entered all the required quantities (BMI, activity level and the amount of weight, you want to lose/gain)'
                : 'You calorie intake should be ' + CCvalue.toFixed(2) + ' calories/day'}
        </div>
    );
}

export default CC;