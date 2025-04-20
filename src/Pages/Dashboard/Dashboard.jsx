import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import Login from '../../Components/Login/Login';
import { getLocalStorage, removeLocalStorage } from '../../Utils/LocalStorage';

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// Helper function to generate distinct colors
const generateColor = (index) => {
	const hue = (index * 137.508) % 360; // Use golden angle approximation
	return `hsl(${hue}, 70%, 60%)`;
};

// --- DATA PROCESSING FUNCTION ---
// This function takes the raw, potentially mixed array of records
// and structures it into an array of student objects, each with
// their ordered time records.
const structureStudentData = (rawData) => {
	if (!rawData || rawData.length === 0) {
		return [];
	}

	const studentsMap = new Map(); // Use a Map for easier handling

	rawData.forEach((record) => {
		const roll = record.student.roll;
		const timeRecord = record.timeRecord; // Extract the time record

		if (!studentsMap.has(roll)) {
			// If student not seen before, create a new entry
			studentsMap.set(roll, {
				student: { ...record.student }, // Copy student details once
				timeRecords: [], // Initialize time records array
			});
		}

		// Add the current time record to this student's array
		studentsMap.get(roll).timeRecords.push(timeRecord);
	});

	// Convert the Map values (the structured student objects) back to an array
	return Array.from(studentsMap.values());
};
// --- END DATA PROCESSING FUNCTION ---

function Dashboard() {
	const [formData, setFormData] = useState(getLocalStorage('institution-data'));
	const [chartData, setChartData] = useState({ labels: [], datasets: [] });
	const [isLoading, setIsLoading] = useState(true);

	// --- Replace this with your actual data source ---
	const rawStudentDataFromSource = getLocalStorage('student-records');
	// --- End of data source ---

	useEffect(() => {
		if (formData) {
			setIsLoading(true);
			// Simulate fetching and processing
			setTimeout(() => {
				const structuredData = structureStudentData(rawStudentDataFromSource);

				if (structuredData.length > 0) {
					const maxQuestions = Math.max(
						0,
						...structuredData.map((student) => student.timeRecords.length)
					);
					const labels = Array.from(
						{ length: maxQuestions },
						(_, i) => `Question ${i + 1}`
					);

					const datasets = structuredData.map((studentData, index) => {
						const color = generateColor(index);
						return {
							label: studentData.student.roll,
							data: Array.from({ length: maxQuestions }, (_, i) => {
								const record = studentData.timeRecords[i];
								return record ? record.s + record.ms / 1000 : null;
							}),
							borderColor: color,
							backgroundColor: color.replace('1)', '0.2)'),
							fill: false,
							tension: 0.1,
						};
					});

					setChartData({ labels, datasets });
				} else {
					setChartData({ labels: [], datasets: [] });
				}
				setIsLoading(false);
			}, 500);
		} else {
			setChartData({ labels: [], datasets: [] });
			setIsLoading(false);
		}
	}, [formData]);

	const handleLogout = () => {
		removeLocalStorage('institution-data');
		setFormData(null);
	};

	if (!formData) {
		return (
			<div className='dashboard'>
				<Login setFormData={setFormData} />
			</div>
		);
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Student Interaction Time per Question',
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				title: { display: true, text: 'Time Taken (seconds)' },
			},
			x: { title: { display: true, text: 'Questions' } },
		},
		interaction: {
			mode: 'index',
			intersect: false,
		},
	};

	return (
		<>
			<div className='dashboard'>
				<h1>Dashboard</h1>
				<p>Welcome, {formData.user || formData.roll}!</p>
				<button
					onClick={handleLogout}
					style={{ marginBottom: '20px' }}
				>
					Logout
				</button>
				<h2>Student Interaction Time Analysis</h2>
				<div
					style={{
						position: 'relative',
						height: '60vh',
						width: '80vw',
						margin: '20px auto',
					}}
				>
					{isLoading ? (
						<p>Loading...</p>
					) : chartData.datasets.length > 0 ? (
						<Line
							options={options}
							data={chartData}
						/>
					) : (
						<p>No interaction data found.</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Dashboard;
