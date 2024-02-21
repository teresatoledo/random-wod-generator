import React from 'react';

function Focus({ exercise, setExercise, focus, handleFocus }) {
	const exercises = {
		Weightlifting: [
			'squat snatch',
			'power snatch',
			'squat clean',
			'power clean',
			'clean and jerk',
			'push jerk',
			'split jerk',
			'STOH',
			'GTOH',
			'dumbell snatch',
			'dumbell clean',
		],
		Gymnastics: [
			'pull ups',
			'chest to bar',
			'bar muscle ups',
			'toes to bar',
			'pull over',
			'HSPU',
			'strict HSPU',
			'HSW',
		],
		Endurance: [
			'cal',
			'wall ball',
			'thursters',
			'SU',
			'DU',
			'devil press',
			'burpees',
		],
	};
	const randomExercise = () => {
		const availableEx = exercises[focus];
		const numberEx = Math.min(3, availableEx.length);
		const selectedEx = [];
		for (let i = 0; i < numberEx; i++) {
			const random = Math.floor(Math.random() * availableEx.length);
			selectedEx.push(availableEx[random]);
		}
		setExercise(selectedEx);
	};
	return (
		<h5 className="result__subtitle">
			<ul>
				{exercise.map((ej, i) => (
					<li key={i}>{ej}</li>
				))}
			</ul>
		</h5>
	);
}

export default Focus;
