import React from 'react';

import './Exercises.css';

import ExerciseList from './ExerciseList';

const exercises = [
    {title: "Abs", group: "abs", exerciseNames: [
        "Seated russian twists",
        "V-sits",
        "Crunches",
        "Hanging leg raises",
        "Hanging knee raises with twist",
        "Plank",
        "Side bridges"
    ]},
    {title: "Back", group: "back", exerciseNames: [
        "Seated cable row",
        "Dumbbell / barbell row",
        "Cable pulldowns",
        "Deadlifts",
        "(Assisted) Pull-ups",
        "Reverse pull-ups / Inverted row (begginner exercise)",
        "Lateral pull-downs",
        "Chin-ups"
    ]},
   {title: 'Biceps', group: "biceps", exerciseNames: [
       "Preacher curls",
       "Sitting hammer curls",
       "Chin-ups",
       "Cose-grip curls",
       "Rope curls",
       "Dumbbell curls",
       "Hammer to chest curls"
   ]},
   {title: "Forearms", group: "forearms", exerciseNames:[
       "Palms-up wrist curls",
       "Palms-down wrist curls",
       "Dead hangs",
       "Farmer's walk",
       "Forearms squeeze"
   ]},
   {title: "Legs", group: "legs", exerciseNames:[
       "Squats",
       "Hip-thrusts",
       "Calf raises",
       "Landmines - sumo squats",
       "Romanian deadlift",
       "Lunges",
       "Goblet squat",
       "Leg curls",
       "Bulgarian split squat"
   ]},
   {title: "Pecks", group: "pecks", exerciseNames:[
       "Bench pres",
       "High-to-low cable flyes",
       "Low-to-high cable flyes",
       "Incline bench press",
       "Wide-arm push-ups",
       "Dips",
       "Dumbbell flyes"
   ]},
   {title: "Shoulders", group: "shoulders", exerciseNames: [
       "Arnold press",
       "Seated lateral dumbbell press",
       "Face pulls",
       "(Seated) Shrugs",
       "Push-ups"
   ]},
   {title: "Triceps", group: "triceps", exerciseNames:[
       "Rope pushdown",
       "Skull-crushers",
       "Overhead cable extensions",
       "Push-ups"
   ]}

]

interface Props{
    group: string;
}

function Exercises({group}:Props) {
    const exerciseFound = exercises.find((exercise) => exercise.group === group)
    return(
        <div className="Exercises-body">
            {exerciseFound &&
                (<ExerciseList 
                    title = {exerciseFound.title}
                    exerciseNames = {exerciseFound.exerciseNames}
                />)
            }
        </div>
    );
}

export default Exercises;