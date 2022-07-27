import React, {useState} from 'react';

import './App.css';

import ClassicButton from './Buttons/ClassicButton';
import Tracking from './Sites/Tracking/Tracking';
import ChooseMuscleGroup from './Sites/Exercises/ChooseMuscleGroup';
import BlankSite from './Sites/Blank/BlankSite';

function App() {
  
  const [buttonStateTracking, setButtonStateTracking] = useState(false);
  function changeSiteToTracking(){
    setButtonStateTracking(!buttonStateTracking);
    if(buttonStateExercises){
      changeSiteToExercises();
    } 
  }
  const [buttonStateExercises, setButtonStateExercies] = useState(false);
  function changeSiteToExercises(){
    setButtonStateExercies(!buttonStateExercises);
    if(buttonStateTracking){
      changeSiteToTracking();
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
          <Tracking/>
        }
        {!buttonStateTracking && !buttonStateExercises &&
          <BlankSite/>
        }
      </div>
    </div>
  );
}

export default App;