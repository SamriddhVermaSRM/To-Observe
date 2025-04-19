import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Training from './Pages/Training/Training';

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
				</Routes>
			</Router>
		</>
	);
}

export default App;
