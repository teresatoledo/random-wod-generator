import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Home from './Home';
import Main from './main/Main';
import Guide from './main/Guide';
import { useState } from 'react';
import Exercises from './main/Exercises';
import 'react-tooltip/dist/react-tooltip.css';
//import { Link, Route, Routes } from 'react-router-dom';

function App() {
	const [type, setType] = useState('');
	const [focus, setFocus] = useState('');
	const [time, setTime] = useState('');
	const [resultBox, setResultBox] = useState('hidden');
	const [number, setNumber] = useState(null);
	const [error, setError] = useState('hidden');
	const [exercise, setExercise] = useState([]);
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/main/"
					element={
						<Main
							type={type}
							setType={setType}
							focus={focus}
							setFocus={setFocus}
							time={time}
							setTime={setTime}
							resultBox={resultBox}
							setResultBox={setResultBox}
							number={number}
							setNumber={setNumber}
							error={error}
							setError={setError}
							exercise={exercise}
							setExercise={setExercise}
						/>
					}
				/>
				<Route path="/main/guide" element={<Guide />} />
				<Route path="/main/exercises" element={<Exercises />} />
			</Routes>
		</div>
	);
}

export default App;
