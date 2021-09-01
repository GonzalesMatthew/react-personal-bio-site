import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import { getAboutMe } from '../helpers/data/AboutMeData';
import { getProjects } from '../helpers/data/ProjectData';
import { getTechnology } from '../helpers/data/TechnologyData';
import {
  checkUser,
  createUser
} from '../helpers/data/UserData';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [aboutMe, setAboutMe] = useState([]);
  const [projects, setProjects] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
    getTechnology().then(setTechnology);
    getAboutMe().then(setAboutMe);
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
        checkUser(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj).then((resp) => setUser(resp));
          } else {
            setUser(userInfoObj);
          }
        });
      } else if ((admin || admin === null) || (user || user === null)) {
        setAdmin(false);
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
      aboutMe={aboutMe}
      projects={projects}
      technology={technology}
      setProjects={setProjects}
      setTechnology={setTechnology}
      setAboutMe={setAboutMe}
    />
  </>
  );
}

export default App;
