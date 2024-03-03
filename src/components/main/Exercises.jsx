import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../../styles/main/Exercises.scss';
function Exercises() {
	return (
		<>
			<Header />
			<div className="exercise">
				<Link to="/main/">
					<button className="exercise__button">Back</button>
				</Link>
				<h2 className="exercise__title">
					Quick video for all exercises
				</h2>
				<h4 className="exercise__subtitle">Weighlifting</h4>
				<ul className="exercise__ul">
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=4v02go3uTBc&ab_channel=CrossFitSANTIAGO"
							target="_blank"
						>
							Squat snatch
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=TL8SMp7RdXQ"
							target="_blank"
						>
							Power snatch
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=Ty14ogq_Vok"
							target="_blank"
						>
							Squat clean
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=KwYJTpQ_x5A"
							target="_blank"
						>
							Power clean
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=PjY1rH4_MOA"
							target="_blank"
						>
							Clean and jerk
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=VrHNJXoSyXw"
							target="_blank"
						>
							Push jerk
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=GUDkOtraHHY"
							target="_blank"
						>
							Split jerk
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=UUcXwF4shCg"
							target="_blank"
						>
							Shoulder to overhead (STOH)
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=5nyasj1quW0"
							target="_blank"
						>
							Ground to overhead (GTOH)
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=3mlhF3dptAo"
							target="_blank"
						>
							Dumbell snatch
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=CUaxieWW0tw"
							target="_blank"
						>
							Dumbell clean
						</a>
					</li>
				</ul>
				<h4 className="guide__subtitle">Gymnastics</h4>
				<ul className="exercise__ul">
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=lzRo-4pq_AY"
							target="_blank"
						>
							Pull up
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=p9Stan68FYM"
							target="_blank"
						>
							Chest to bar
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=OCg3UXgzftc"
							target="_blank"
						>
							Bar muscle up
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=_03pCKOv4l4"
							target="_blank"
						>
							Toes to bar
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=faJDYEZmueM"
							target="_blank"
						>
							Pull over
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=InRvHNUOlSs"
							target="_blank"
						>
							HSPU
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=0wDEO6shVjc"
							target="_blank"
						>
							Strict HSPU
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=I5p2VVDupq8"
							target="_blank"
						>
							HSW
						</a>
					</li>
				</ul>
				<h4 className="guide__subtitle">Endurance</h4>
				<ul className="exercise__ul">
					<li>
						<a className="exercise__desc" href="#">
							Calories in row/assault bike/echo bike/ski
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=fpUD0mcFp_0"
							target="_blank"
						>
							Wall ball
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=L219ltL15zk"
							target="_blank"
						>
							Thursters
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=hCuXYrTOMxI"
							target="_blank"
						>
							Single Under (SU)
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=-tF3hUsPZAI"
							target="_blank"
						>
							Double Under (DU)
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=81wWS0rAaDk"
							target="_blank"
						>
							Devil press
						</a>
					</li>
					<li>
						<a
							className="exercise__desc"
							href="https://www.youtube.com/watch?v=auBLPXO8Fww"
							target="_blank"
						>
							Burpees
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Exercises;
