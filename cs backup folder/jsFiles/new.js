import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuYNWHfDwVF537e_e0HBi5viQUQe-gE7Q",
  authDomain: "chess4all-e7766.firebaseapp.com",
  projectId: "chess4all-e7766",
  storageBucket: "chess4all-e7766.appspot.com",
  messagingSenderId: "600603932859",
  appId: "1:600603932859:web:b6606cc0ef9bb70504d19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialise variables
const auth = firebase.auth()
const database = firebase.database()

function signup() {
    email = document.getElementById('email').value
    password = document.getElementById('psw').value
    full_name = document.getElementById('name').value
    
    if (validate_email(email) == false) {
        alert('Incorrect email format')
        return
    }
    if (validate_password(password) == false) {
        alert('Re-enter password. Password must be atleast 6 characters')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
            email : email,
            full_name : full_name,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)
    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
        alert(error_message)
    })
}
function validate(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}
function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}




