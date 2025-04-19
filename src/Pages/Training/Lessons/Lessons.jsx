import { useState } from 'react';

function Lessons({ question }) {
	const [loadedAt, setLodedAt] = useState(Date.now());
	const handleSubmit = (e) => {
		e.preventDefault();
		const time = new Date(Date.now() - loadedAt);
		console.log(time);

		console.log({
			m: time.getMinutes() - 30,
			s: time.getSeconds(),
			ms: time.getMilliseconds(),
		});
	};
	return (
		<>
			<form
				className='lesson'
				onSubmit={handleSubmit}
			>
				<h2>{question}</h2>
				<div>
					<input
						type='radio'
						name='ans'
					/>
					<input
						type='radio'
						name='ans'
					/>
					<input
						type='radio'
						name='ans'
					/>
					<input
						type='radio'
						name='ans'
					/>
				</div>
				<button type='submit'></button>
			</form>
		</>
	);
}

export default Lessons;
