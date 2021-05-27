import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const checkUser = (userObj) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createUser = (userObj) => new Promise((reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body);
    })
    .catch((error) => reject(error));
});

export { createUser, checkUser };
