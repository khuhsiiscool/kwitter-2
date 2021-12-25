
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
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

    
    
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref('/').child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
            localStorage.setItem("room_name" ,name);
window.location ="kwitter_page.html";

}