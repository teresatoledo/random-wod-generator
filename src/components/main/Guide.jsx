import { Link } from 'react-router-dom';
import Header from './Header';

function Guide() {
	return (
		<>
			<Header />
			<article className="article">
				<div className="guide">
					<Link to="/main/">
						<button className="guide__button">Back</button>
					</Link>
					<h2 className="guide__title">Quick how to use guide</h2>
					<h4 className="guide__subtitle">Type of wod</h4>
					<p className="guide__text">
						You can choose between the most common type of wods:
					</p>
					<p className="guide__text">
						<span className="guide__text--title">AMRAP:</span> As
						many reps as possible. You will be given a time frame
						and you will have to repeat the given exercises as long
						as time is runnig.
					</p>
					<p className="guide__text">
						<span className="guide__text--title">EMOM:</span> Every
						minute on the minute. You will have to do the given
						exercise/reps in a minute. The remaning time of that
						time once you finish will be rest.
					</p>
					<p className="guide__text">
						<span className="guide__text--title">For time:</span>{' '}
						You should do the rounds and exercises indicated just
						once.
					</p>
					<p className="guide__text">
						<span className="guide__text--title">For quality:</span>{' '}
						In this kind of workout, the number of reps or time are
						not the main focus. In for quality wods, the main focus
						should be the technique and the quality of the movements
						indicated.
					</p>
					<h4 className="guide__subtitle">Main focus</h4>
					<p className="guide__text">
						<span className="guide__text--title">
							Weightligting:
						</span>{' '}
						The majority of exercises will be weightligting focused:
						snatch, clean, jerk...
					</p>
					<p className="guide__text">
						<span className="guide__text--title">Gymnastics:</span>{' '}
						The majority of exercises will be gymnastics focused:
						pull-ups, chest to bar, toes to bar, bar muscle ups.
						HSPU...
					</p>
					<p className="guide__text">
						<span className="guide__text--title">Endurance:</span>{' '}
						The majority of exercises will be endurance focused:
						cal, run, wallball, burpees...
					</p>
					<p className="guide__text">
						<span className="guide__text--title">All in one:</span>{' '}
						Wod will be a mix of all the above.
					</p>
					<h4 className="guide__subtitle">Duration</h4>
					<p className="guide__text">
						Wod duration will be between range selected.
					</p>
				</div>
			</article>
		</>
	);
}

export default Guide;
