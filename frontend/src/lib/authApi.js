import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"; 


export async function signupUser(userData) {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/signup`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  } catch (err) {
    console.error("Signup error:", err.response?.data?.error || err.message);
    throw err;
  }
}


export async function loginUser(credentials) {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, credentials, {
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  } catch (err) {
    console.error("Login error:", err.response?.data?.error || err.message);
    throw err;
  }
}