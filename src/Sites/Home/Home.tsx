import React, {useState} from 'react';

import './Home.css';

import ClassicButton from '../../Buttons/ClassicButton';
import Quotes from './Quotes/Quotes';
import Dumbbell from '../../Images/SpinningDumbBell';
import CalorieCounter from './Calories/CalorieCounter';
import BMI from './Calculators/BMI';
import BMR from './Calculators/BMR';
import CC from './Calculators/CC';
import DailyRecap from './DailyRecap';

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
            <div style={{marginBottom: "2rem"}}>
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
            
            <CalorieCounter/>
            <br/><br/><br/><br/>
        </div>
    );
}

export default Calculators;