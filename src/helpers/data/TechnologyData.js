import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnology = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/technology.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createTechnology = (techObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/technology.json`, techObj)
    .then(getTechnology)
    .catch((error) => reject(error));
});

const updateTechnology = (firebaseKey, techObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/technology/${firebaseKey}`, techObj)
    .then(getTechnology())
    .catch((error) => reject(error));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/technology/${firebaseKey}`)
    .then(() => getTechnology().then)
    .catch((error) => reject(error));
})

export default {
  getTechnology, createTechnology, updateTechnology, deleteTechnology
};
