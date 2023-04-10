import React, {useState, MouseEvent} from 'react';

import ImageButton from '../../Buttons/ImageButton';
import DisplayMuscleGroupButton from '../../Buttons/DisplayMuscleGroupButton';
import Exercises from './Exercises'

function ChooseMuscleGroup(){
    
    const [buttonValue, setButtonValue] = useState(false);
    function ChangeButtonValue(){
        setButtonValue(!buttonValue);
    };
    
    const [group, setGroup] = useState("back");
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
            
            {buttonValue &&
                <div className="Choose-muscle-group">
                    <ImageButton
                        className="Display-muscle-groups-button"
                        text="Choose muscle group"
                        id="arrowUp"
                        type="button"
                        altText="Choose muscle group arrow up"
                        imageClass="button-icon"
                        onClick={ChangeButtonValue}/>
                </div>
            }
            {!buttonValue &&
                <div className="Choose-muscle-group">
                    <ImageButton
                        className="Display-muscle-groups-button"
                        text="Choose muscle group"
                        id="arrowDown"
                        type="button"
                        altText="Choose muscle group arrow down"
                        imageClass="button-icon"
                        onClick={ChangeButtonValue}/>
                </div>
            }

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