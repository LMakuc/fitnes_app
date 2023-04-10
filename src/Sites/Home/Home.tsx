import React, {useState} from 'react';

import './Home.css';

import ClassicButton from '../../Buttons/ClassicButton';
import Quotes from './Quotes/Quotes';
import CalorieCounter from './Calories/CalorieCounter';
import BMI from './Calculators/BMI';
import BMR from './Calculators/BMR';
import CC from './Calculators/CC';

function Calculators(){

    const [buttonStateBMI, setButtonStateBMI] = useState(true);
    const [buttonStateBMR, setButtonStateBMR] = useState(false);
    const [buttonStateCC, setButtonStateCC] = useState(false);
    function openBMI(){
        setButtonStateBMI(true);
        if(buttonStateBMR || buttonStateCC){
            setButtonStateBMR(false);
            setButtonStateCC(false);
        }
    }
    function openBMR(){
        setButtonStateBMR(true);
        if(buttonStateBMI || buttonStateCC){
            setButtonStateBMI(false);
            setButtonStateCC(false);
        }
    }
    function openCC(){
        setButtonStateCC(true);
        if(buttonStateBMI || buttonStateBMR){
            setButtonStateBMI(false);
            setButtonStateBMR(false);
        }
    }
//<div className="home-title">Calculators</div>
    return(
        <div className="home-body">
            <div className="calculators">
                <ClassicButton
                    className="choose-calculator-button"
                    text="BMI"
                    type="button"
                    onClick={openBMI}/>
                <ClassicButton
                    className="choose-calculator-button"
                    text="BMR"
                    type="button"
                    onClick={openBMR}/>
                <ClassicButton
                    className="choose-calculator-button"
                    text="CC"
                    type="button"
                    onClick={openCC}/>
            </div>
            <div>
                {buttonStateBMI &&
                    <BMI/>
                }
                {buttonStateBMR &&
                    <BMR/>
                }
                {buttonStateCC &&
                    <CC/>
                }
            </div>
            <Quotes
                className="animated-quote"
                quote="'Don't let small minds convince you that your dreams are too big.'"/>
            <div className="home-title">Daily recap</div>
            <Quotes
                className="animated-quote"
                quote="'Never forget where you came from'"/>
            <div className="home-title">Calorie counter</div>
            <CalorieCounter/>
            <Quotes
                className="animated-quote"
                quote="'You will never reach perfect. So die trying'"/>
            <div className="home-title">Body Measurment Tracker</div>
        </div>
    );
}

export default Calculators;