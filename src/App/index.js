import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import { getProjects } from '../helpers/data/ProjectData';
import { getTechnology } from '../helpers/data/TechnologyData';
import {
  // checkUser,
  createUser
} from '../helpers/data/UserData';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [projects, setProjects] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
    getTechnology().then(setTechnology);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === firebaseConfig.adminId)) {
        setAdmin(true);
      } else if (authed) {
        const userInfoObj = {
          fullname: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          email: authed.email
        };
        setAdmin(false);
        setUser(userInfoObj);
        // checkUser(userInfoObj).then((resp) => {
        //   if (resp === null) {
        //     createUser(userInfoObj);
        //   }
        // });
        createUser(userInfoObj);
      } else if (admin || admin === null) {
        setAdmin(false);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar
      admin={admin}
      user={user}
      setProjects={setProjects}
      setTechnology={setTechnology}
    />
    <Routes
      admin={admin}
      projects={projects}
      technology={technology}
      setProjects={setProjects}
      setTechnology={setTechnology}
    />
  </>
  );
}

export default App;
