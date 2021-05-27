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
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, fbKey)
        .then(() => {
          getProjects().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateProjects = (projObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${projObj.firebaseKey}.json`, projObj)
    .then(() => {
      getProjects().then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteProjects = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => {
      getProjects().then(resolve);
    })
    .catch((error) => reject(error));
});

export {
  getProjects, createProjects, updateProjects, deleteProjects
};
