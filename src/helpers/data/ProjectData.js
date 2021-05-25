import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createProjects = (projObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projObj)
    .then(() => resolve(getProjects()))
    .catch((error) => reject(error));
});

const updateProjects = (firebaseKey, projObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${firebaseKey}.json`, projObj)
    .then(() => resolve(getProjects()))
    .catch((error) => reject(error));
});

const deleteProjects = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => resolve(getProjects()))
    .catch((error) => reject(error));
});

export {
  getProjects, createProjects, updateProjects, deleteProjects
};
