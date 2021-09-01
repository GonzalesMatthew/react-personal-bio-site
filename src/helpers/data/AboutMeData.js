import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAboutMe = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/aboutMe.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const updateAboutMe = (aboutMeObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/aboutMe/${aboutMeObj.firebaseKey}.json`, aboutMeObj)
    .then(() => {
      getAboutMe().then(resolve);
    })
    .catch((error) => reject(error));
});

export {
  getAboutMe, updateAboutMe
};
