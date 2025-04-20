import { Link } from 'react-router-dom';
import Arrow from '../../Components/Arrow';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from 'motion/react';
import { useState } from 'react';

function Home() {
	const [form, setForm] = useState(0);
	return (
		<>
			<main>
				<Navbar />
				<div className='home'>
					<div className='slogan'>
						<h1 className='name'>TO OBSERVE</h1>
						<h3>Bridging The Gaps To a Better Living Society</h3>
					</div>
					<div className='student'>
						<img
							src='/student-experiment.png'
							alt=''
						/>
						<motion.h4
							initial={{ scale: 1.07 }}
							animate={{
								scale: [1.07, 0.95, 1.04, 1.0, 0.96, 1.07],
							}}
							transition={{ repeat: Infinity, duration: 3 }}
							className='how'
						>
							How to be.....
						</motion.h4>
						<motion.h4
							initial={{ scale: 1.02 }}
							animate={{
								scale: [1.02, 0.95, 1.08, 1.1, 1.09, 1.02],
							}}
							transition={{ repeat: Infinity, duration: 6 }}
							className='who'
						>
							Who am i.....
						</motion.h4>
						<motion.h4
							initial={{ scale: 1.09 }}
							animate={{
								scale: [1.09, 1.0, 0.97, 1.03, 1.06, 1.09],
							}}
							transition={{ repeat: Infinity, duration: 5 }}
							className='best'
						>
							How to become the best....
						</motion.h4>
						<motion.h4
							initial={{ scale: 0.92 }}
							animate={{
								scale: [0.92, 1.04, 1.01, 0.95, 0.97, 0.92],
							}}
							transition={{ repeat: Infinity, duration: 4 }}
							className='why'
						>
							5 reasons why.......
						</motion.h4>
					</div>
					<div className='guide-img-txt'>Let us Help you untangle...</div>
					<img
						className='guide-img'
						src='/guide.png'
						alt=''
					/>
					<Arrow />
				</div>
				<div className='about-us'>
					<h1 className='title'>ABOUT US</h1>
					<p className='description'>
						To Observe is an interactive digital platform designed to work in
						collaboration with schools and educational institutions.
						<br />
						It provides realistic simulations of day-to-day social and emotional
						challenges faced by students. In these simulations, students take on
						the role of a character in a virtual storyline, making choices and
						facing consequences based on real-life scenarios.
						<br />
						These modules cover topics often left out of traditional
						curriculums—like dealing with criticism, anxiety, jealousy, social
						media/virtual addiction, insecurity, relationships, and more.
						<br />
						Our aim is to bridge the growing gap between emotional awareness and
						digital literacy, helping students build real-life values while
						learning to navigate the complexities of the online world.
					</p>
					<div className='box'>
						<Link
							to='/how-it-works'
							className='container'
						>
							<h1>How Exactly We Work?</h1>
						</Link>
						<Link
							to='/medical-significance'
							className='container'
						>
							<h1>Importance & Medical Significance</h1>
						</Link>
						<Link
							to='/success-stories'
							className='container'
						>
							<h1>Success Stories</h1>
						</Link>
					</div>
				</div>
				<div className='partners'>
					<div className='partner-nav'>
						<button
							onClick={() => setForm(0)}
							className={form === 0 ? 'active' : ''}
						>
							Company
						</button>
						<button
							onClick={() => setForm(1)}
							className={form === 1 ? 'active' : ''}
						>
							Instituion
						</button>
					</div>
					<RenderForms form={form} />
				</div>
			</main>
		</>
	);
}

const RenderForms = ({ form }) => {
	if (form == 0) {
		return (
			<>
				<form className='form'>
					<label>Enter your name</label>

					<input
						type='text'
						name='name'
						placeholder='Your Name'
					/>
					<label>Enter your company name</label>
					<input
						type='text'
						name='company-name'
						placeholder='Company Name'
					/>
					<label>Enter your company location</label>
					<input
						type='text'
						name='company-location'
						placeholder='Your Company Location'
					/>
					<label>Enter your email and contact</label>
					<input
						type='text'
						name='email'
						placeholder='Your E-mail'
					/>
					<input
						type='text'
						name='contact'
						placeholder='Your Contact'
					/>
					<label>Enter briefly</label>
					<input
						type='text'
						name='question'
						placeholder='Why do you want to come on board with us?'
					/>
					<button
						type='submit'
						className='btn'
					>
						Submit
					</button>
				</form>
			</>
		);
	} else if (form == 1) {
		return (
			<form className='form'>
				<label>Enter your name</label>

				<input
					type='text'
					name='name'
					placeholder='Your Name'
				/>

				<label>Enter your institution name</label>

				<input
					type='text'
					name='institution-name'
					placeholder='Institution Name'
				/>

				<label>Enter your institution location</label>

				<input
					type='text'
					name='institution-location'
					placeholder='Your Institution Location'
				/>

				<label>Enter your email and contact</label>

				<input
					type='text'
					name='email'
					placeholder='Your E-mail'
				/>
				<input
					type='text'
					name='contact'
					placeholder='Your Contact'
				/>

				<label>Enter briefly</label>

				<input
					type='text'
					name='question'
					placeholder='Why do you want to support us?'
				/>

				<button
					type='submit'
					className='btn'
				>
					Submit
				</button>
				<a
					href='/dashboard'
					className='note'
				>
					Already an partner? Click here to see your dashboard
				</a>
			</form>
		);
	}
};

export default Home;
