// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';
// import { useHistory } from 'react-router-dom';

// function App() {
//   const [admin, setAdmin] = useState(null);
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((authed) => {
//       if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
//         setAdmin(true);
//       } else if (admin || admin === null) {
//         setAdmin(false);
//         setLoggedInUser(false);
//       }
//     });
//   }, []);

//   return(
//     <h1>Log On </h1>
//   );
// }

// export default App;
