import { useState } from 'react';
import Lessons from './Lessons/Lessons';

function Training() {
	const [lesson, setLesson] = useState(0);
	return (
		<>
			<Lessons />
		</>
	);
}

export default Training;
