import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';

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
						path='/about-us'
						element={<AboutUs />}
					></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
