import React, {useState} from 'react';

import './App.css';

import ImageButton from './Buttons/ImageButton';
import Tracking from './Sites/Tracking/Tracking';
import ChooseMuscleGroup from './Sites/Exercises/ChooseMuscleGroup';
import Home from './Sites/Home/Home';
import Routines from './Sites/Routines/Routines';

function App() {
  
  const [buttonStateTracking, setButtonStateTracking] = useState(false);
  function changeSiteToTracking(){
    setButtonStateTracking(true);
    if(buttonStateExercises || buttonStateHome || buttonStateRoutines){
      setButtonStateExercies(false);
      setButtonStateHome(false);
      setButtonStateRoutines(false);
    }
  }
  const [buttonStateExercises, setButtonStateExercies] = useState(false);
  function changeSiteToExercises(){
    setButtonStateExercies(true);
    if(buttonStateTracking || buttonStateHome ||buttonStateRoutines){
      setButtonStateTracking(false);
      setButtonStateHome(false);
      setButtonStateRoutines(false);
    }
  }
  const[buttonStateHome, setButtonStateHome] = useState(true);
  function changeSiteToHome(){
    setButtonStateHome(true);
    if(buttonStateTracking || buttonStateExercises || buttonStateRoutines){
      setButtonStateTracking(false);
      setButtonStateExercies(false);
      setButtonStateRoutines(false);
    }
  }
  const[buttonStateRoutines, setButtonStateRoutines] = useState(false);
  function changeSiteToRoutines(){
    setButtonStateRoutines(true);
    if(buttonStateTracking || buttonStateHome || buttonStateExercises){
      setButtonStateTracking(false);
      setButtonStateHome(false);
      setButtonStateExercies(false);
    }
  }

  return (
    <div>
      <div className="App-header">
        <div className="bottom-navigation">
          <ImageButton
            className="Change-site-button"
            text="Home"
            id="home"
            type="button"
            altText="Home button icon"
            imageClass="button-icon"
            onClick={changeSiteToHome}/>
          <ImageButton
            className="Change-site-button"
            text="Exercises"
            id="exercises"
            type="button"
            altText="Exercises button icon"
            imageClass="button-icon"
            onClick={changeSiteToTracking}/>
          <ImageButton
            className="Change-site-button"
            text="Routines"
            id="routines"
            type="button"
            altText="Routines button icon"
            imageClass="button-icon"
            onClick={changeSiteToRoutines}/>
          <ImageButton
            className="Change-site-button"
            text="Tracking"
            id="tracking"
            type="button"
            altText="Tracking button icon"
            imageClass="button-icon"
            onClick={changeSiteToExercises}/>
        </div>
      </div>
      <div className="App-body">
        {buttonStateTracking && 
          <ChooseMuscleGroup/>
        }
        {buttonStateExercises &&
          <Tracking />
        }
        {buttonStateHome &&
          <Home/>
        }
        {buttonStateRoutines && 
          <Routines/>
        }
      </div>
    </div>
  );
}

export default App;