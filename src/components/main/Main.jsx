import Header from './Header';
import { Link } from 'react-router-dom';
import '../../styles/main/Guide.scss';
import Body from './Body';
function Main({
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
	return (
		<>
			<Header />
			<div className="mainSection">
				<Link to="/main/guide" className="main__guide">
					<h3>Quick how to use guide</h3>
				</Link>
			</div>
			<Body
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
		</>
	);
}

export default Main;
