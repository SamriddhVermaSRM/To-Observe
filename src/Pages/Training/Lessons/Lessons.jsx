import { useEffect, useState } from 'react';

function Lessons({ question, setCur, cur, setFinished }) {
	const [loadedAt, setLodedAt] = useState(Date.now());
	console.log(cur);

	const handleSubmit = (e) => {
		e.preventDefault();
		const time = new Date(Date.now() - loadedAt);
		console.log(time);
		console.log({
			m: time.getMinutes() - 30,
			s: time.getSeconds(),
			ms: time.getMilliseconds(),
		});
		const data = new FormData(e.target);
		const ans = data.get('ans');
		console.log(ans);

		if (ans === question.choices[0].message) {
			setCur(cur + question.choices[0].next);
		}
		if (ans === question.choices[1].message) {
			setCur(cur + question.choices[1].next);
		}
	};

	if (question.speaker === 'user') {
		return (
			<>
				<form
					className='lesson'
					onSubmit={handleSubmit}
				>
					<h2>{question.message}</h2>
					<div className='questions'>
						<label htmlFor='a'>
							<input
								type='radio'
								name='ans'
								id='a'
								className='question'
								value={question.choices[0].message}
							/>
							{question.choices[0].message}
						</label>

						<label htmlFor='b'>
							<input
								type='radio'
								name='ans'
								id='b'
								className='question'
								value={question.choices[1].message}
							/>
							{question.choices[1].message}
						</label>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</>
		);
	} else if (question.speaker === 'bacche') {
		return (
			<>
				<div
					className='bacche'
					onClick={() => {
						if (!question.end) setCur(cur + 1);
						else setFinished(true);
					}}
				>
					<h2>{question.message}</h2>
					<img
						src='/bacche.png'
						alt=''
						style={{ height: '400px' }}
					/>
				</div>
			</>
		);
	} else if (question.speaker === 'teacher') {
		return (
			<>
				<div
					className='teacher'
					onClick={() => {
						if (!question.end) setCur(cur + 1);
						else setFinished(true);
					}}
				>
					<h2>{question.message}</h2>
					<img
						src='/teacher.png'
						alt=''
						style={{ height: '400px' }}
					/>
				</div>
			</>
		);
	} else if (question.speaker === 'girl') {
		return (
			<>
				<div
					className='girl'
					onClick={() => {
						if (!question.end) setCur(cur + 1);
						else setFinished(true);
					}}
				>
					<h2>{question.message}</h2>
					<img
						src='/girl.png'
						alt=''
						style={{ height: '400px' }}
					/>
				</div>
			</>
		);
	} else if (question.speaker === 'boy') {
		return (
			<>
				<div
					className='boy'
					onClick={() => {
						if (!question.end) setCur(cur + 1);
						else setFinished(true);
					}}
				>
					<h2>{question.message}</h2>
					<img
						src='/boy.png'
						alt=''
						style={{ height: '400px' }}
					/>
				</div>
			</>
		);
	}
}

export default Lessons;
