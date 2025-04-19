import { useEffect, useState } from 'react';

function TimeToClick({ children }) {
	const [loadAt, setLoadAt] = useState(Date.now());
	const [clickAt, setClickAt] = useState();

	const handleClick = () => {
		setClickAt(Date.now());
	};
	return (
		<>
			<button onClick={handleClick}>{children}</button>
			<h1>Loaded At {loadAt.toLocaleString()}</h1>
			{clickAt && <h1>{new Date(clickAt - loadAt).getSeconds()}</h1>}
		</>
	);
}

export default TimeToClick;
