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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						provident vitae non voluptates quam! Nemo, dolorem nulla ab
						praesentium repellat et quaerat, aperiam obcaecati molestiae
						asperiores consequatur temporibus harum itaque!
					</p>
					<div className='box'>
						<div className='container'>
							<h1>ASSESMENT</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
								provident vitae non voluptates quam! Nemo, dolorem nulla ab
								praesentium repellat et quaerat, aperiam obcaecati molestiae
								asperiores consequatur temporibus harum itaque!
							</p>
						</div>
						<div className='container'>
							<h1>PERSONALIZED LEARNING</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
								provident vitae non voluptates quam! Nemo, dolorem nulla ab
								praesentium repellat et quaerat, aperiam obcaecati molestiae
								asperiores consequatur temporibus harum itaque!
							</p>
						</div>
						<div className='container'>
							<h1>ONGOING ASSESMENT</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
								provident vitae non voluptates quam! Nemo, dolorem nulla ab
								praesentium repellat et quaerat, aperiam obcaecati molestiae
								asperiores consequatur temporibus harum itaque!
							</p>
						</div>
					</div>
				</div>
				<div className='partners'>
					<div className='partner-nav'>
						<button onClick={() => setForm(0)}>Company</button>
						<button onClick={() => setForm(1)}>Instituion</button>
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
