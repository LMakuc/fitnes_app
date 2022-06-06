import React from 'react';

import './App.css';

import SiteButton from './Buttons/SiteButton'

function App() {
  return (
    <div>
      <header className="App-header">
        <div id="topOfPage">
          <SiteButton
            className="Site-button"
            text="Exercises"
            type="button"/>
          <SiteButton
            className="Site-button"
            text="Tracking"
            type="button"/>
            <br />
        </div>

        <div>
          <p>vrstica z navigacijo</p>
        </div>
      </header>
     
      <body className="App-body">
        <p>Vaje</p>
      </body>
    </div>
  );
}

export default App;