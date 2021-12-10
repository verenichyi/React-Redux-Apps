import './App.css';
import Timer from './components/Timer/Timer';
import CircularProgressBar from './components/Circular-progress-bar/CircularProgressBar';
import React from 'react';


function App() {
	return (
		<div className="App">
			<CircularProgressBar strokeWidth="10" sqSize="200"/>
			<Timer/>
		</div>
	);
}

export default App;
