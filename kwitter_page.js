//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDtolGV2eYkIePyLJPKR4R2YFCCwAyN46g",
      authDomain: "kwitter-b36d3.firebaseapp.com",
      databaseURL: "https://kwitter-b36d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-b36d3",
      storageBucket: "kwitter-b36d3.appspot.com",
      messagingSenderId: "151566609013",
      appId: "1:151566609013:web:54001915d42e6c39a0663c",
      measurementId: "G-FSDQ993M79"
    };
    
    // Initialize Fireb 
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()

{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}