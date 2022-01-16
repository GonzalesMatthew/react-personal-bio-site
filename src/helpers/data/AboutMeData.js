import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAboutMe = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/aboutMe.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addAboutMe = (aboutObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/aboutMe/`, aboutObj)
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/aboutMe/${response.data.name}.json`, fbKey)
        .then(() => {
          getAboutMe().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateAboutMe = (aboutMeObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/aboutMe/${aboutMeObj.firebaseKey}.json`, aboutMeObj)
    .then(() => {
      getAboutMe().then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteAboutMe = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/aboutMe/${firebaseKey}.json`)
    .then(() => {
      getAboutMe().then(resolve);
    })
    .catch((error) => reject(error));
});

export {
  getAboutMe, addAboutMe, updateAboutMe, deleteAboutMe
};
