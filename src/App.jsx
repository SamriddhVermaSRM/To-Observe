import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Training from './Pages/Training/Training';
import Dashboard from './Pages/Dashboard/Dashboard';
import {
	HowItBeWorking,
	Success,
	MedicalSignificance,
} from './Pages/About Us/aboutus';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					></Route>
					<Route
						path='/training'
						element={<Training />}
					></Route>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					></Route>
					<Route
						path='/how-it-works'
						element={<HowItBeWorking />}
					></Route>
					<Route
						path='/success-stories'
						element={<Success />}
					></Route>
					<Route
						path='/medical-significance'
						element={<MedicalSignificance />}
					></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
