  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBEARnVWbgDONyoVneVxK-_9XMRy2jUv4",
    authDomain: "persona-hci.firebaseapp.com",
    databaseURL: "https://persona-hci.firebaseio.com",
    projectId: "persona-hci",
    storageBucket: "persona-hci.appspot.com",
    messagingSenderId: "994643555305",
    appId: "1:994643555305:web:97ca9a9fa8b29e7261d178",
    measurementId: "G-F9FP8SB8Z2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var db = firebase.firestore();
var posts = document.getElementById("posts");

db.collection("posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    if(doc.data().img){
        console.log("here: "+ doc.data().title)
     posts.innerHTML+=` <div class="card" id="${doc.id}">
      <h2>${doc.data().title}</h2>
      <div style="display:flex;">
      <img src="${doc.data().img}" class="resimg" />
      </div>
      <p>${doc.data().post}</p>
    </div>`}
    else{
    posts.innerHTML+=` <div class="card" id="${doc.id}">
      <h2>${doc.data().title}</h2> 
      <p>${doc.data().post}</p>
    </div>`
    }
        console.log(doc.id, " => ", doc.data());
    });
});
