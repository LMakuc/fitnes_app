import React from 'react';

import './Exercises.css';

import AbsDisplay from './DisplayExercise/AbsDisplay'
import BackDisplay from './DisplayExercise/BackDisplay';
import BicepsDisplay from './DisplayExercise/BicepsDisplay';
import ForearmsDisplay from './DisplayExercise/ForearmsDisplay';
import LegsDisplay from './DisplayExercise/LegsDisplay';
import PecksDisplay from './DisplayExercise/PecksDisplay';
import ShouldersDisplay from './DisplayExercise/ShouldersDisplay';
import TricepsDisplay from './DisplayExercise/TricepsDisplay';

interface Props{
    group: string;
}

function Exercises({group}:Props) {
    return(
        <div className="Exercises-body">
            {group === "abs" && <AbsDisplay/>}
            {group === "back" && <BackDisplay/>}
            {group === "biceps" && <BicepsDisplay/>}
            {group === "forearms" && <ForearmsDisplay/>}
            {group === "legs" && <LegsDisplay/>}
            {group === "pecks" && <PecksDisplay/>}
            {group === "shoulders" && <ShouldersDisplay/>}
            {group === "triceps" && <TricepsDisplay/>}
        </div>
    );
}

export default Exercises;