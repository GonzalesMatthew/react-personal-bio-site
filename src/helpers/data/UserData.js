import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSingleUser = (userObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/${userObj.uid}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => {
          getSingleUser(userObj).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

export { createUser, getSingleUser };
