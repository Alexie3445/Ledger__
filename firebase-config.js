// firebase-config.js

const firebaseConfig = {
    apiKey: "AIzaSyCSiRsdiLgH8_EXG_SrNgSH3z3Yhxu-1tY",
    authDomain: "walletsite.firebaseapp.com",
    projectId: "walletsite-66a4a",
    storageBucket: "walletsite.appspot.com",
    messagingSenderId: "452022925867",
    appId: "1:452022925867:android:ec41d7acf60f7b0444486e"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  /**
   * Register user and store info in Firestore
   */
  function registerUser(name, email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        return db.collection('users').doc(user.uid).set({
          name: name,
          email: user.email,
          registeredAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      })
      .then(() => {
        alert("User registered and saved successfully!");
      })
      .catch(error => {
        console.error("Error registering user:", error.message);
      });
  }
  