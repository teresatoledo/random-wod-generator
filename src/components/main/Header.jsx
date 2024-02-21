import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import '../../styles/main/Header.scss';
function Header() {
	return (
		<Link to="/">
			<div className="header">
				<img
					className="header__logo"
					src={logo}
					alt="Random wod generator logo"
				/>
			</div>
		</Link>
	);
}

export default Header;
