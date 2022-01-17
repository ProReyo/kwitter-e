
 const firebaseConfig = {
    apiKey: "AIzaSyDa_gOXmme3EqkgYBmsrI5g-F4ZMFei1J8",
    authDomain: "kwitter-78546.firebaseapp.com",
    databaseURL: "https://kwitter-78546-default-rtdb.firebaseio.com",
    projectId: "kwitter-78546",
    storageBucket: "kwitter-78546.appspot.com",
    messagingSenderId: "999938864611",
    appId: "1:999938864611:web:d9920c9baf4a7559641cd6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }