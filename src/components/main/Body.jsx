import { useCallback, useEffect } from 'react';
import '../../styles/main/Body.scss';
function Body({
	type,
	setType,
	focus,
	setFocus,
	time,
	setTime,
	resultBox,
	setResultBox,
	number,
	setNumber,
	error,
	setError,
	exercise,
	setExercise,
}) {
	const handleClick = (event) => {
		event.preventDefault();
		if (type == '' || focus == '' || time == '') {
			setError('');
		} else {
			setError('hidden');
			setResultBox('');
		}
	};
	const handleType = (event) => {
		setType(event.target.value);
	};
	const handleFocus = (event) => {
		setFocus(event.target.value);
	};
	const handleTime = (event) => {
		const timeSelect = event.target.value;
		setTime(timeSelect);
		const selectedTime = parseInt(timeSelect);
		let min, max;
		if (selectedTime === 5) {
			min = 5;
			max = 10;
		} else if (selectedTime === 11) {
			min = 11;
			max = 15;
		} else if (selectedTime === 16) {
			min = 16;
			max = 20;
		} else if (selectedTime === 21) {
			min = 21;
			max = 25;
		}
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		setNumber(randomNum);
	};
	const exercises = {
		Weightlifting: [
			'Squat snatch',
			'Power snatch',
			'Squat clean',
			'Power clean',
			'Clean and jerk',
			'Push jerk',
			'Split jerk',
			'STOH',
			'GTOH',
			'Dumbell snatch',
			'Dumbell clean',
		],
		Gymnastics: [
			'Pull ups',
			'Chest to bar',
			'Bar muscle ups',
			'Toes to bar',
			'Pull over',
			'HSPU',
			'Strict HSPU',
			'HSW',
		],
		Endurance: [
			'Cal',
			'Wall ball',
			'Thursters',
			'SU',
			'DU',
			'Devil press',
			'Burpees',
		],
	};
	const randomExercise = () => {
		const availableEx = exercises[focus];
		const selectedEx = new Set(); // En JavaScript, new Set() es una estructura de datos que representa una colección de valores únicos. Los conjuntos (Set) son objetos que te permiten almacenar valores únicos de cualquier tipo, ya sean valores primitivos o referencias a objetos.
		//Al crear un nuevo conjunto utilizando new Set(), estás inicializando un conjunto vacío. Puedes agregar elementos a este conjunto utilizando el método add(), y puedes eliminar elementos utilizando el método delete(). Además, puedes verificar si un elemento está presente en el conjunto utilizando el método has(), y puedes obtener el tamaño del conjunto utilizando la propiedad size.

		// Agregar ejercicios del foco seleccionado
		availableEx.forEach((exercise) => {
			selectedEx.add(exercise);
		});

		// Agregar ejercicios de los otros focos
		const otherFoci = Object.keys(exercises).filter((key) => key !== focus);
		otherFoci.forEach((otherFocus) => {
			const otherExercises = exercises[otherFocus];
			otherExercises.forEach((exercise) => {
				selectedEx.add(exercise);
			});
		});

		// Convertir el conjunto a un array y mezclar los ejercicios
		const selectedExercises = Array.from(selectedEx).sort(
			() => Math.random() - 0.5
		);

		// Limitar el número de ejercicios a mostrar
		let finalExercises = selectedExercises.slice(0, 3).map((exercise) => {
			const repetitions = Math.floor(Math.random() * (10 - 3 + 1)) + 5; // Generar un número aleatorio entre 5 y 10 para las repeticiones
			return { exercise, repetitions }; // Devolver el ejercicio junto con el número de repeticiones
		});

		// Ajustar ejercicios según el tipo de WOD
		if (type === 'EMOM' && time > 0) {
			const totalExercises = finalExercises.length;
			console.log(totalExercises);
			console.log(time);
			const exercisesPerMinute = Math.ceil(totalExercises / time);
			finalExercises = finalExercises.map((exercise, index) => ({
				...exercise,
				repetitions: exercisesPerMinute,
				minute: (index % time) + 1,
			}));
		} else if (type === 'For time') {
			finalExercises.forEach((exercise) => {
				exercise.repetitions = Math.min(exercise.repetitions, 20);
			});
		} else if (type === 'For quality') {
			finalExercises.forEach((exercise) => {
				exercise.repetitions = Math.min(exercise.repetitions, 5);
			});
		}

		setExercise(finalExercises);
	};

	useEffect(() => {
		if (focus !== '') {
			randomExercise();
		}
	}, [focus, time, type]);
	return (
		<>
			<form className="form">
				<div className="form__div">
					<label className="form__label" htmlFor="type">
						Type of wod
					</label>
					<select
						name="type"
						id="type"
						onChange={handleType}
						value={type}
					>
						<option value="">Select a type</option>
						<option value="AMRAP">AMRAP</option>
						<option value="EMOM">EMOM</option>
						<option value="For time">For time</option>
						<option value="For quality">For quality</option>
					</select>
				</div>
				<div className="form__div">
					<label className="form__label" htmlFor="focus">
						Main focus
					</label>
					<select
						name="focus"
						id="focus"
						onChange={handleFocus}
						value={focus}
					>
						<option value="">Select a focus</option>
						<option value="Weightlifting">Weightlifting</option>
						<option value="Gymnastics">Gymnastics</option>
						<option value="Endurance">Endurance</option>
					</select>
				</div>
				<div className="form__div">
					<label className="form__label" htmlFor="time">
						Duration
					</label>
					<select
						name="time"
						id="time"
						onChange={handleTime}
						value={time}
					>
						<option value="">Select a time frame</option>
						<option value="5">5-10 min</option>
						<option value="11">11-15 min</option>
						<option value="16">16-20 min</option>
						<option value="21">21-25 min</option>
					</select>
				</div>
				<button className="form__button" onClick={handleClick}>
					Create wod
				</button>
			</form>
			<div className={`result result__subtitle ${error}`}>
				Please, make sure everything is well selected.
			</div>
			<div className={`result ${resultBox}`}>
				<h4 className="result__title">Today's WOD:</h4>
				<h5 className="result__subtitle">
					{type} {number} minutes
				</h5>
				<h5 className="result__subtitle">
					Main focus will be: {focus}
				</h5>
				<h5 className="result__subtitle">
					<ul>
						{exercise.map((item, index) => (
							<li key={index}>
								{type === 'EMOM'
									? `Minute ${item.minute}: ${item.repetitions} ${item.exercise}`
									: `${item.repetitions} ${item.exercise}`}
							</li>
						))}
					</ul>
				</h5>
			</div>
		</>
	);
}

export default Body;
