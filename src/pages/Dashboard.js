import React from 'react';
import bms from '../b-m-s.jpg';

const Dashboard = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">User Authentication using AWS Cognito</h1>
      </header>
      <p className="App-intro">Let's implement authentication using AWS Cognito and User Pool.</p>
      <p>You should not see this page without logging in.</p>
      <div className="image">
      	<a href="https://www.youtube.com/watch?v=hShYnVEmbb4" target="_blank" rel="noopener noreferrer"><img src={bms} alt="BMS"/></a>
      	<p style={{ fontWeight: 700 }}>click at your own risk.</p>
      </div>
    </div>
  );

}

export default Dashboard;
