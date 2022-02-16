import "./App.css";
import React from "react";
import UserForm from '../UserForm/Userform'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>NexTrip</div>
      </header>
      <main>
        <h2>Real-time Departures</h2>
        <UserForm/>
      </main>
    </div>
  );
}

export default App;
