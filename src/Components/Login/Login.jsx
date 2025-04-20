function Login({ student, setFormData }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		setFormData(data);
	};
	if (student) {
		return (
			<>
				<a
					className='logo-container'
					href='/'
				>
					<img
						className='logo'
						src='/logo.png'
						alt=''
					/>
					<h1 className='logo-text'>To Observe</h1>
				</a>
				<form
					className='login'
					onSubmit={handleSubmit}
				>
					<h2>Student</h2>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Full Name'
						required
					/>
					<label htmlFor='roll'>Roll Number</label>
					<input
						type='text'
						placeholder='Roll Number'
						name='roll'
						required
					/>
					<label>School Name</label>
					<select name='school'>
						<option
							value='Spring Dale College'
							key='Spring Dale College'
						>
							Spring Dale College
						</option>
						<option
							value='Fellowship Missionary School'
							key='Fellowship Missionary School'
						>
							Fellowship Missionary School
						</option>
						<option
							value='CMS'
							key='CMS'
						>
							CMS
						</option>
					</select>
					<button type='submit'>Login</button>
				</form>
			</>
		);
	}
	return (
		<>
			<a
				className='logo-container'
				href='/'
			>
				<img
					className='logo'
					src='/logo.png'
					alt=''
				/>
				<h1 className='logo-text'>To Observe</h1>
			</a>
			<form
				className='login'
				onSubmit={handleSubmit}
			>
				<h2>Login</h2>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					placeholder='Email'
					required
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					placeholder='Password'
					required
				/>
				<label>School Name</label>
				<select name='school'>
					<option
						value='Spring Dale College'
						key='Spring Dale College'
					>
						Spring Dale College
					</option>
					<option
						value='Fellowship Missionary School'
						key='Fellowship Missionary School'
					>
						Fellowship Missionary School
					</option>
					<option
						value='CMS'
						key='CMS'
					>
						CMS
					</option>
				</select>
				<button type='submit'>Login</button>
			</form>
		</>
	);
}

export default Login;
