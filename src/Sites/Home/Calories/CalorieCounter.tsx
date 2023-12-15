import React, {useState} from 'react';


import ClassicButton from '../../../Buttons/ClassicButton';
import CalorieInput from './CalorieInput';
import CalorieOutput from './CalorieOutput';



function CalorieCounter (){

    const [outputBool, setOutputBool] = useState(false);
    const [inputBool, setInputBool] = useState(true);

    return(
        <div>
            <ClassicButton
                className="choose-calorie-input-output-button"
                text="Food input"
                type="button"
                id="calorieInput"
                onClick={()=>{
                    setInputBool(true);
                    setOutputBool(false);
                }}/>
            <ClassicButton
                className="choose-calorie-input-output-button"
                text="Food output"
                type="button"
                id="calorieInput"
                onClick={() =>{
                    setOutputBool(true);
                    setInputBool(false);
                }}/>
            {inputBool &&
                <CalorieInput/>
            }
            {outputBool &&
                <CalorieOutput/>
            }
        </div>
    );
}

export default CalorieCounter;