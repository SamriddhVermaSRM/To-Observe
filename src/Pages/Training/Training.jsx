import { useState, useEffect } from 'react';
import Lessons from './Lessons/Lessons';
import modules from './modules.json';
import { getLocalStorage } from '../../Utils/LocalStorage';
import Login from '../../Components/Login/Login';

function Training() {
	const [cur, setCur] = useState(-1);
	const [finished, setFinished] = useState(false);
	const [formData, setFormData] = useState(getLocalStorage('student-login'));
	const [module, setModule] = useState();
	console.log(module);

	// If the user is not logged in, render the Login component
	if (!formData) {
		return (
			<main className='training'>
				<Login
					student={true}
					setFormData={setFormData}
				/>
			</main>
		);
	}

	if (!module) {
		console.log(modules);

		return (
			<>
				<main
					className='training'
					style={{ background: "url('final_bg.webp')" }}
				>
					{Object.keys(modules).map((key) => {
						console.log(modules[key]);
						return (
							<button onClick={() => setModule(modules[key])}>
								<h1>{key}</h1>
								<h2>{modules[key].name}</h2>
							</button>
						);
					})}
				</main>
			</>
		);
	}

	if (finished) {
		return (
			<main className='training'>
				<div className='module-deets'>
					<h1>You Finished the</h1>
					<h1>{module.name}</h1>
					<h1>Thank youuu</h1>
					<button
						onClick={() => {
							setModule(null);
							setCur(-1);
							setFinished(false);
						}}
					>
						Click to go back to modules
					</button>
				</div>
			</main>
		);
	}

	// Render the training page
	return (
		<main
			className='training'
			style={{ background: "url('final_bg.webp')" }}
		>
			{cur === -1 ? (
				<div className='module-deets'>
					<h1>{module.name}</h1>
					<button onClick={() => setCur(0)}>
						Start{' '}
						<img
							src='/left-arrow.svg'
							alt='Start'
						/>
					</button>
				</div>
			) : (
				<Lessons
					question={module.lessons[cur]}
					setCur={setCur}
					cur={cur}
					setFinished={setFinished}
				/>
			)}
		</main>
	);
}

export default Training;
