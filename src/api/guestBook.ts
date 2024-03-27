// src/api/guestBook.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchGuestbook = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('fetchGuestbook error:', error);
    throw error;
  }
};

export const addGuestbookEntry = async (entry) => {
  try {
    const response = await axios.post(`${API_URL}`, entry);
    return response.data;
  } catch (error) {
    console.error('addGuestbookEntry error:', error);
    throw error;
  }
};
