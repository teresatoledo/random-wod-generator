import { Link } from 'react-router-dom';
import '../styles/Home.scss';
function Home() {
	return (
		<main className="landing">
			<h1 className="landing__title">Random wod generator</h1>
			<p className="landing__description">
				A tool for those days when you have the motivation, but need
				some extra help
			</p>
			<Link to="/main" className="landing__button">
				Get started!
			</Link>
		</main>
	);
}

export default Home;
