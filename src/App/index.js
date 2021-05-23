import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import getProjects from '../helpers/data/ProjectData';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [projects, setProjects] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // something to happen
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar
      user={user}
    />
    <Routes
      user={user}
      projects={projects}
      setProjects={setProjects}
    />
  </>
  );
}

export default App;
