var obj = {};

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



function send(){
    var obj = {};
var title = document.getElementById("title");
var post = document.getElementById("post");
var img = document.getElementById("img");
    if(img.value){
obj = {
    "title":title.value,
    "img":img.value,
    "post":post.value
}; }else{
obj = {
"title":title.value,
"post": post.value

}

}
console.log(img.value);
console.log(post.value);
var db = firebase.firestore();
db.collection("posts").doc().set(obj)
.then(function() {
    console.log("Document successfully written!");
    alert("data sent");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
    alert("data not sent")
});

}