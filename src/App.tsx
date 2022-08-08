import React, {useState} from 'react';

import './App.css';

import ClassicButton from './Buttons/ClassicButton';
import Tracking from './Sites/Tracking/Tracking';
import ChooseMuscleGroup from './Sites/Exercises/ChooseMuscleGroup';
import BlankSite from './Sites/Blank/BlankSite';

function App() {
  
  const [buttonStateTracking, setButtonStateTracking] = useState(true);
  function changeSiteToTracking(){
    setButtonStateTracking(true);
    if(buttonStateExercises || buttonStateCalculators){
      setButtonStateExercies(false);
      setButtonStateCalculators(false);
    }
  }
  const [buttonStateExercises, setButtonStateExercies] = useState(false);
  function changeSiteToExercises(){
    setButtonStateExercies(true);
    if(buttonStateTracking || buttonStateCalculators){
      setButtonStateTracking(false);
      setButtonStateCalculators(false);
    }
  }
  const[buttonStateCalculators, setButtonStateCalculators] = useState(false);
  function changeSiteToCalculators(){
    setButtonStateCalculators(true);
    if(buttonStateTracking || buttonStateExercises){
      setButtonStateTracking(false);
      setButtonStateExercies(false);
    }
  }

  return (
    <div>
      <header className="App-header">
        <div >
          <ClassicButton
            className="Change-site-button"
            text="Exercises"
            type="button"
            onClick={changeSiteToTracking}/>
          <ClassicButton
            className="Change-site-button"
            text="Calculators"
            type="button"
            onClick={changeSiteToCalculators}/>
          <ClassicButton
            className="Change-site-button"
            text="Tracking"
            type="button"
            onClick={changeSiteToExercises}/>
        </div>
      </header>
      <div className="App-body">
        {buttonStateTracking && 
          <ChooseMuscleGroup/>
        }
        {buttonStateExercises &&
          <Tracking
            output={true}/>
        }
        {buttonStateCalculators &&
          <BlankSite/>
        }
      </div>
    </div>
  );
}

export default App;