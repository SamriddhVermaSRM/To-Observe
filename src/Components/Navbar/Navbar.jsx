import { Navigate, useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		const ele = e.target.textContent;
		console.log(ele);
		if (ele === 'ABOUT US') {
			document.querySelector('.about-us').scrollIntoView({
				behavior: 'smooth',
			});
		} else if (ele === 'BECOME A PARTNER') {
			document.querySelector('.partners').scrollIntoView({
				behavior: 'smooth',
			});
		} else if (ele === 'START TRAINING') {
			navigate('/training');
		} else {
			navigate('/');
		}
	};
	return (
		<>
			<nav>
				<a
					href='/'
					onClick={handleClick}
				>
					<img
						className='logo'
						src='/logo.png'
						alt=''
					/>
					<h1 className='logo-text'>To Observe</h1>
				</a>
				<ul>
					<li>
						<button
							href='/about-us'
							onClick={handleClick}
						>
							ABOUT US
						</button>
					</li>
					<li>
						<button
							href='/partner'
							onClick={handleClick}
						>
							BECOME A PARTNER
						</button>
					</li>
					<li>
						<button
							href='/training'
							onClick={handleClick}
						>
							START TRAINING
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
