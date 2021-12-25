var firebaseConfig = {
    apiKey: "AIzaSyD2XMLAA6g-a_rp8X56WHiC4d6APwzSOM0",
    authDomain: "ktwitter-twitter-for-kids.firebaseapp.com",
    databaseURL: "https://ktwitter-twitter-for-kids-default-rtdb.firebaseio.com",
    projectId: "ktwitter-twitter-for-kids",
    storageBucket: "ktwitter-twitter-for-kids.appspot.com",
    messagingSenderId: "815104072034",
    appId: "1:815104072034:web:af56e4f1928b62ac9bf43b",
    measurementId: "G-2C5VVPW7ZE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}