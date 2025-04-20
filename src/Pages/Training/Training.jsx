import { useState, useEffect } from 'react';
import Lessons from './Lessons/Lessons';
import lessonData from './modules.json';
import {
	getLocalStorage,
	removeLocalStorage,
	setLocalStorage,
} from '../../Utils/LocalStorage';
import Login from '../../Components/Login/Login';

function Training() {
	const [cur, setCur] = useState(-1);
	const [finished, setFinished] = useState(false);
	const [formData, setFormData] = useState(getLocalStorage('student-login'));
	const [modules, setModules] = useState(lessonData);
	const [module, setModule] = useState();
	const [newModuleInput, setNewModuleInput] = useState('');

	const fetchNewModule = async () => {
		if (!newModuleInput.trim()) {
			alert('Please enter a valid input for the new module.');
			return;
		}

		try {
			const response = await fetch('http://localhost:3000/gen', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ input: newModuleInput }),
			});

			if (!response.ok) {
				throw new Error('Failed to fetch the new module.');
			}

			const newModule = await response.json();
			setModules((prevModules) => [...prevModules, newModule]);
			setLocalStorage('modules', [...modules, newModule]);
			setNewModuleInput('');
			alert('New module fetched and saved successfully!');
		} catch (error) {
			console.error('Error fetching new module:', error);
			alert('An error occurred while fetching the new module.');
		}
	};

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

	if (formData) {
		setLocalStorage('student-login', formData);
	}

	if (!module) {
		return (
			<>
				<main
					className='training'
					style={{ background: "url('final_bg.webp')" }}
				>
					<button
						className='btns'
						onClick={() => {
							removeLocalStorage('student-login');
							setFormData(null);
						}}
					>
						LogOut
					</button>
					<div className='modules'>
						{Object.keys(modules).map((key) => {
							console.log(modules[key]);
							return (
								<button onClick={() => setModule(modules[key])}>
									<h1>{key}</h1>
									<h2>{modules[key].name}</h2>
								</button>
							);
						})}
					</div>
					<div className='new-module-box'>
						<input
							type='text'
							value={newModuleInput}
							onChange={(e) => setNewModuleInput(e.target.value)}
							placeholder='Enter input for new module'
						/>
						<button onClick={fetchNewModule}>Fetch New Module</button>
					</div>
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
