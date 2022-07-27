import React, {useState, MouseEvent} from 'react';

import ClassicButton from '../../Buttons/ClassicButton';
import DisplayMuscleGroupButton from '../../Buttons/DisplayMuscleGroupButton';
import Exercises from './Exercises'

function ChooseMuscleGroup(){
    
    const [buttonValue, setButtonValue] = useState(false);
    function ChangeButtonValue(){
        setButtonValue(!buttonValue);
    };
    
    const [group, setGroup] = useState("");
    function ChangeGroup(e: MouseEvent<HTMLElement>){
        setGroup(e.currentTarget.id);
        console.log(e.currentTarget.id);
    };

    const GroupButton=[
        { text: "Back", id: "back"},
        { text: "Shoulders", id: "shoulders"},
        { text: "Biceps", id: "biceps"},
        { text: "Triceps", id: "triceps"},
        { text: "Forearms", id: "forearms"},
        { text: "Pecks", id: "pecks"},
        { text: "Abs", id: "abs"},
        { text: "Legs", id: "legs"}
    ];

    return(
        <div className="Dropdown">
            
            <div className="Choose-muscle-group">
                <ClassicButton
                    className="Display-muscle-groups-button"
                    text="Choose muscle group"
                    type="button"
                    onClick={ChangeButtonValue}/>
            </div>

                {buttonValue &&
                    <div className="Dropdown-content">
                        {GroupButton.map((OutputButton) => 
                            <DisplayMuscleGroupButton 
                                className = "Muscle-group-button" 
                                id = {OutputButton.id}
                                key = {OutputButton.id}
                                type = "button" 
                                text = {OutputButton.text}
                                onClick = {ChangeGroup}
                            />
                        )}
                    </div>
                }

                <Exercises group = {group}/>
                
        </div>
    );
}

export default ChooseMuscleGroup;