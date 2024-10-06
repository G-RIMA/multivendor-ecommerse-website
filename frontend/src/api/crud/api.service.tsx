// GET request
import axios from 'axios';

const BACKEND_API= 'http://localhost:3000';

export async function get(endpoint: string, headers: object) {
	try {
		const response = await axios.get(`${BACKEND_API}${endpoint}`, headers);
		return response.data;
	} catch (error) {
		throw error;
	}
}

// POST request
export async function post(endpoint: string, data: object, headers: object) {
	try {
		const url = `${BACKEND_API}${endpoint}`;
		const response = await axios.post(url, data, headers);
		return response.data;
	} catch (error) {
		throw error;
	}
}

// UPDATE request
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function put(endpoint: string, data: any) {
	try {
		const url = `${BACKEND_API}${endpoint}`;
		const response = await axios.put(url, {
			method: 'PUT',
			body: JSON.stringify(data)
		});
		return await response.data;
	} catch (error) {
		throw error;
	}
}

// DELETE request
export async function deletes(endpoint: string, data: object = {}) {
	try {
		const url = `${BACKEND_API}${endpoint}`;
		const response = await axios.delete(url, data);
		return response.data;
	} catch (error) {
		throw error;
	}
}

// PATCH request
export async function patch(endpoint: string, data: object, token: string) {
	try {
		const url = `${BACKEND_API}${endpoint}`;
		const response = await axios.patch(url, data, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}