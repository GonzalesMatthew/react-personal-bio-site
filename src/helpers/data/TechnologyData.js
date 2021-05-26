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
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/technology/${response.data.name}.json`, fbKey)
        .then(() => {
          getTechnology().then((techArray) => resolve(techArray));
        });
    })
    .catch((error) => reject(error));
});

const updateTechnology = (techObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/technology/${techObj.firebaseKey}.json`, techObj)
    .then(() => {
      getTechnology().then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/technology/${firebaseKey}.json`)
    .then(() => {
      getTechnology().then((techArray) => resolve(techArray));
    })
    .catch((error) => reject(error));
});

export {
  getTechnology, createTechnology, updateTechnology, deleteTechnology
};
