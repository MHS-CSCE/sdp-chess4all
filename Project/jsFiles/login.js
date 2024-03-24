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
const auth = firebase.auth()




document.getElementById("user_login").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;

    console.log("testssfadklfsajfda")

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("User logged in:", user);
        window.location.href = "/html/main.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Login failed:", errorMessage);
        document.querySelector(".alert").innerHTML = errorMessage;
        document.querySelector(".alert").style.display = "block";
    });

    document.getElementById("user_login").reset();
}
