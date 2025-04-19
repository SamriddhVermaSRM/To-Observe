export function getLocalStorage(key) {
	if (typeof window !== 'undefined') {
		return JSON.parse(window.localStorage.getItem(key));
	}
	return null;
}

export function setLocalStorage(key, value) {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
}

export function removeLocalStorage(key) {
	if (typeof window !== 'undefined') {
		window.localStorage.removeItem(key);
	}
}

export function keyExists(key) {
	if (typeof window !== 'undefined') {
		return window.localStorage.getItem(key) !== null;
	}
	return false;
}
