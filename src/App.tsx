import React, {useState} from 'react';

import './App.css';

import ChangeSiteButton from './Buttons/SiteButton';
import Tracking from './Sites/Tracking/Tracking';
import Exercises from './Sites/Exercises/Exercises';
import BlankSite from './Sites/BlankSite';

function App() {
  
  const [buttonStateExercises, setButtonStateExercies] = useState(true);
  const [buttonStateTracking, setButtonStateTracking] = useState(false);
  function changeSiteToTracking(){
    setButtonStateTracking(!buttonStateTracking);
  }
  function changeSiteToExerises(){
    setButtonStateExercies(!buttonStateExercises);
  }

  return (
    <div>
      <header className="App-header">
        <div>
          <ChangeSiteButton
            className="Change-site-button"
            text="Exercises"
            type="button"
            onClick={changeSiteToTracking}/>
          <ChangeSiteButton
            className="Change-site-button"
            text="Tracking"
            type="button"
            onClick={changeSiteToExerises}/>
            <br />
        </div>
      </header>
      <body className="App-body">
        {buttonStateTracking && 
          <Exercises/>
        }
        {buttonStateExercises &&
          <Tracking/>
        }
        {!buttonStateTracking && !buttonStateExercises &&
          <BlankSite/>
        }
      </body>
    </div>
  );
}

export default App;

/*  po koncu zadnjega ChangeSiteButton-a
<DetermineSite
            determine={buttonState}/>
*/