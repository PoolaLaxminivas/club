import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Members API
export const membersAPI = {
  getAll: () => apiClient.get('/members'),
  getCore: () => apiClient.get('/members/core'),
  getActive: () => apiClient.get('/members/active'),
};

// Events API
export const eventsAPI = {
  getAll: (type = null) => {
    const params = type ? { type } : {};
    return apiClient.get('/events', { params });
  },
  getById: (id) => apiClient.get(`/events/${id}`),
};

// Projects API
export const projectsAPI = {
  getAll: () => apiClient.get('/projects'),
  getById: (id) => apiClient.get(`/projects/${id}`),
};

// Join Submissions API
export const joinAPI = {
  submit: (data) => apiClient.post('/join', data),
};

export default {
  members: membersAPI,
  events: eventsAPI,
  projects: projectsAPI,
  join: joinAPI,
};
