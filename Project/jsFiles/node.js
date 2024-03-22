const firebaseConfig = {
    apiKey: "AIzaSyCuYNWHfDwVF537e_e0HBi5viQUQe-gE7Q",
    authDomain: "chess4all-e7766.firebaseapp.com",
    databaseURL: "https://chess4all-e7766-default-rtdb.firebaseio.com",
    projectId: "chess4all-e7766",
    storageBucket: "chess4all-e7766.appspot.com",
    messagingSenderId: "600603932859",
    appId: "1:600603932859:web:b6606cc0ef9bb70504d19e"
};

firebase.initializeApp(firebaseConfig);

var chess4allDB = firebase.database().ref('chess4all');
var auth = firebase.auth()

document.getElementById("chess4all").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;

    auth.createUserWithEmailAndPassword(email, password)
    sendData(name, email, password);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("chess4all").reset()

}

const sendData = (name, email, password) => {
    var newForm = chess4allDB.push();
    newForm.set({
        name_ : name,
        email : email,
        password : password,
    })
}
