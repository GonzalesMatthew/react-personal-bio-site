import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import { getProjects } from '../helpers/data/ProjectData';
import { getTechnology } from '../helpers/data/TechnologyData';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [projects, setProjects] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
    getTechnology().then(setTechnology);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === firebaseConfig.adminId)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar
      admin={admin}
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
