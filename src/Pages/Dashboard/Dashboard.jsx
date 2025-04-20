import { useState } from 'react';
import Login from '../../Components/Login/Login';
import {
	getLocalStorage,
	keyExists,
	removeLocalStorage,
	setLocalStorage,
} from '../../Utils/LocalStorage';

function Dashboard() {
	const [formData, setFormData] = useState(getLocalStorage('institution-data'));
	const handleLogout = () => {
		removeLocalStorage('institution-data');
		setFormData(null);
	};
	if (formData) {
		setLocalStorage('institution-data', formData);
	}
	if (!formData) {
		return (
			<div className='dashboard'>
				<Login setFormData={setFormData} />
			</div>
		);
	}
	return (
		<>
			<div className='dashboard'>
				<h1>Welcome</h1>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</>
	);
}

export default Dashboard;
